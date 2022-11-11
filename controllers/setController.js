/* eslint-disable @typescript-eslint/no-var-requires */
const setService = require("../service/setService");
const { DateTime } = require("luxon");

class SetController {
  async createNewSet(req, res, next) {
    try {
      const { lang, title, max_num, user_id } = req.body;

      const newSet = await setService.createNewSet(
        lang,
        title,
        max_num,
        user_id
      );

      return res.json(newSet);
    } catch (e) {
      next(e);
    }
  }

  async getAllSets(req, res, next) {
    try {
      const { user_id, lang } = req.body;
      const setsList = await setService.getAllSets(user_id, lang);
      const sortedList = setsList.sort((a,b) => a.learning_stage > b.learning_stage ? 1 : -1)
      return res.json(sortedList);
    } catch (e) {
      next(e);
    }
  }

  async startLearningSet(req, res, next) {
    try {
      const { set_id } = req.body;
      const current_set = await setService.findSet(set_id);
      const updatedSet = await setService.learningSet(set_id, current_set);
      return res.json(updatedSet);
    } catch (e) {
      next(e);
    }
  }

  async deleteSet(req, res, next) {
    try {
      const { set_id, user_id, lang } = req.body;

      await setService.deleteSet(set_id);
      const setsList = await setService.getAllSets(user_id, lang);
      return res.json(setsList);
    } catch (e) {
      next(e);
    }
  }

  async updateSet(req, res, next) {
    try {
      const { set_id, title, max_num } = req.body;

      const updatedSet = await setService.updateSet(set_id, title, max_num);

      return res.json(updatedSet);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new SetController();
