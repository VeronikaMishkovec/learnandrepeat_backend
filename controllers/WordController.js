/* eslint-disable @typescript-eslint/no-var-requires */
const WordService = require("../service/WordService");

class WordController {
  async createNewWord(req, res, next) {
    try {
      const { origin, translation, set_id } = req.body;

      const newWord = await WordService.createNewWord(
        origin,
        translation,
        set_id
      );

      return res.json(newWord);
    } catch (e) {
      next(e);
    }
  }

  async getWordsList(req, res, next) {
    try {
      const { set_id } = req.body;

      const wordsList = await WordService.getWordsList(set_id);

      return res.json(wordsList);
    } catch (e) {
      next(e);
    }
  }

  async updateWord(req, res, next) {
    try {
      const { _id, origin, translation, set_id } = req.body;

      const wordsList = await WordService.updateWord(
        _id,
        origin,
        translation,
        set_id
      );

      return res.json(wordsList);
    } catch (e) {
      next(e);
    }
  }

  async deleteWord(req, res, next) {
    try {
      const { _id, set_id } = req.body;

      const wordsList = await WordService.deleteWord(_id, set_id);

      return res.json(wordsList);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new WordController();
