const PartOfSpeechModel = require("../model/PartOfSpeechModel");

class PartOfSpeechService {
  async createPart(name, color) {
    const list = await PartOfSpeechModel.create({ name: name, color: color });
    return list;
  }

  async getPartsList() {
    const list = await PartOfSpeechModel.find();
    return list
  }
}
module.exports = new PartOfSpeechService();
