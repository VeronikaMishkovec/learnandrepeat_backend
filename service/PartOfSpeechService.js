const PartOfSpeechModel = require("../model/PartOfSpeechModel");

class PartOfSpeechService {
  async createPart(name) {
    const list = await PartOfSpeechModel.create({ name: name });
    return list;
  }

  async getPartsList() {
    const list = await PartOfSpeechModel.find();
    return list
  }
}
module.exports = new PartOfSpeechService();
