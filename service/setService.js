/* eslint-disable @typescript-eslint/no-var-requires */

const SetModel = require("../model/setModel");
const { DateTime } = require("luxon");
const WordModel = require("../model/WordModel");

class SetService {
  async createNewSet(lang, title, max_num, user_id) {
    const set = await SetModel.findOne({ lang, title, user_id });

    if (set) {
      throw console.log(`Project ${title} is already exist`);
    }
    await SetModel.create({
      lang,
      title,
      max_num,
      user_id,
      creation_date: `${DateTime.now().toISO()}`,
      learning_stage: 0,
      next_repeating_date: `${DateTime.now().toISO()}`,
      next_repeat: "in 30 minutes",
      current_num: 0,
      set_status: 'Inactive'
    });
    const setsList = SetModel.find({ user_id, lang });
    return setsList;
  }

  async getAllSets(user_id, lang) {
    const setsList = SetModel.find({ user_id, lang });
    return setsList;
  }

  async findSet(set_id) {
    const set = SetModel.findById(set_id);
    return set;
  }

  async learningSet(set_id, current_learning_stage) {
    const learning_stage =
      current_learning_stage.learning_stage < 8 &&
      current_learning_stage.learning_stage + 1;
    let next_repeating_date = "";
    let next_repeat = '';
    let set_status = '';
    switch (current_learning_stage.learning_stage) {
      case 0:
        next_repeating_date = DateTime.now().plus({ minutes: 30 }).toISO();
        set_status = 'in 30 minutes';
        break;
      case 1:
        next_repeating_date = DateTime.now().plus({ hours: 8 }).toISO();
        set_status = 'in 8 hours';
        break;
      case 2:
        next_repeating_date = DateTime.now().plus({ hours: 24 }).toISO();
        set_status = 'in 24 hours';
        break;
      case 3:
        next_repeating_date = DateTime.now().plus({ days: 3 }).toISO();
        break;
      case 4:
        next_repeating_date = DateTime.now().plus({ days: 10 }).toISO();
        break;
      case 6:
        next_repeating_date = DateTime.now().plus({ month: 1 }).toISO();
        break;
      case 7:
        next_repeating_date = DateTime.now().plus({ month: 3 }).toISO();
        break;
    }
    await SetModel.findByIdAndUpdate(set_id, {
      learning_stage: learning_stage,
      next_repeating_date: next_repeating_date,
      next_repeat: next_repeat,
      set_status: set_status
    });

    const updatedSet = SetModel.findOne({ set_id });

    return updatedSet;
  }

  async deleteSet(set_id) {
    await SetModel.findByIdAndDelete(set_id);
  }
  async updateSet(set_id, title, max_num) {
    await SetModel.findByIdAndUpdate(set_id, {
      title,
      max_num,
    });
    const updatedSet = await SetModel.findById(set_id);
    return updatedSet;
  }

  async updateCurrentWordsNumber(set_id, current_num) {
    const updatedSet = await SetModel.findByIdAndUpdate(set_id, { current_num });
    return updatedSet;
  }
}
module.exports = new SetService();
