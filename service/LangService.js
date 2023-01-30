const LangModel = require("../model/LangModel");

class LangService {
  async createLang(title, image, color, bg_color) {
    const list = await LangModel.create({ title, image, color, bg_color });
    return list;
  }

  async getLangsList() {
    const list = await LangModel.find();
    return list
  }
}
module.exports = new LangService();
