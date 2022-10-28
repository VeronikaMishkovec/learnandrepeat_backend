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
      let inactive_sets = [];
      let first_repeat_sets = [];
      let second_repeat_sets = [];
      let third_repeat_sets = [];
      let fourth_repeat_sets = [];
      let fifth_repeat_sets = [];
      let six_repeat_sets = [];
      let sevens_repeat_sets = [];

      setsList.forEach((item) => {
        switch (item.learning_stage) {
          case 0: {
            inactive_sets = [...inactive_sets, item];
            break;
          }
          case 1: {
            first_repeat_sets = [...first_repeat_sets, item];
            break;
          }
          case 2: {
            second_repeat_sets = [...second_repeat_sets, item];
            break;
          }
          case 3: {
            third_repeat_sets = [...third_repeat_sets, item];
            break;
          }
          case 4: {
            fourth_repeat_sets = [...fourth_repeat_sets, item];
            break;
          }
          case 5: {
            fifth_repeat_sets = [...fifth_repeat_sets, item];
            break;
          }
          case 6: {
            six_repeat_sets = [...six_repeat_sets, item];
            break;
          }
          case 7: {
            sevens_repeat_sets = [...sevens_repeat_sets, item];
            break;
          }
        }
      });

      const list = [
        { title: "Repeat in 30 minutes", data: first_repeat_sets },
        { title: "Repeat in 8 hours", data: second_repeat_sets },
        { title: "Repeat in 1 day", data: third_repeat_sets },
        { title: "Repeat in 3 days", data: fourth_repeat_sets },
        { title: "Repeat in 10 days", data: fifth_repeat_sets },
        { title: "Repeat in 1 month", data: six_repeat_sets },
        { title: "Repeat in 3 month", data: sevens_repeat_sets },
        { title: "Inactive", data: inactive_sets },
      ].filter((item) => item.data.length !== 0);
      return res.json(list);
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