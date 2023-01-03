/* eslint-disable @typescript-eslint/no-var-requires */
const PartOfSpeechService = require("../service/PartOfSpeechService");

class PartOfSpeechController {
  async createPartOfSpeech(req, res, next) {
    try {
      const { name, color } = req.body;

      const list = await PartOfSpeechService.createPart(name, color);
      return res.json(list);
    } catch (e) {
      next(e);
    }
  }

  async getListPartOfSpeech(req, res, next) {
    try {
      const list = await PartOfSpeechService.getPartsList();
      return res.json(list);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PartOfSpeechController();
