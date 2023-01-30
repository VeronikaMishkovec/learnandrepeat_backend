/* eslint-disable @typescript-eslint/no-var-requires */
const LangService = require("../service/LangService");

class LangController {
  async createLang(req, res, next) {
    try {
      const { title, image, color, bg_color } = req.body;

      const list = await LangService.createLang(title, image, color, bg_color);
      return res.json(list);
    } catch (e) {
      next(e);
    }
  }

  async getListLang(req, res, next) {
    try {
      const list = await LangService.getLangsList();
      return res.json(list);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new LangController();
