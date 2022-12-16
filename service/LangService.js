const LangModel = require("../model/LangModel");

class LangService {
  async createLang(title, image) {
    const list = await LangModel.create({ title, image });
    return list;
  }

  async getLangsList() {
    const list = await LangModel.find();
    return list
  }
}
module.exports = new LangService();
