/* eslint-disable @typescript-eslint/no-var-requires */

const WordModel = require("../model/WordModel");

class WordService {
  async createNewWord(origin, translation, set_id, part_of_speech, part_of_speech_color) {
    await WordModel.create({
      origin,
      translation,
      set_id,
      part_of_speech,
      part_of_speech_color
    });

    const wordList = await WordModel.find({ set_id });
    return wordList;
  }

  async getWordsList(set_id) {
    const wordList = await WordModel.find({ set_id });
    return wordList;
  }

  async updateWord(_id, origin, translation, set_id) {
    await WordModel.findByIdAndUpdate(_id, {
      origin,
      translation,
    });

    const updatedList = await WordModel.find({ set_id });
    return updatedList;
  }

  async deleteWord(_id, set_id) {
    await WordModel.findByIdAndDelete(_id);

    const updatedList = await WordModel.find({ set_id });
    return updatedList;
  }
}
module.exports = new WordService();
