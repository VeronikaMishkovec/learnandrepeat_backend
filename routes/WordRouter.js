const Router = require("express").Router;

const WordController = require("../controllers/WordController");
const PartOfSpeechController = require("../controllers/PartOfSpeechController")

const router = new Router();

router.post("/add-new-word", WordController.createNewWord);
router.post("/set-words", WordController.getWordsList);
router.post("/update-word", WordController.updateWord);
router.post("/delete-word", WordController.deleteWord);
router.post("/add-part-of-speech", PartOfSpeechController.createPartOfSpeech)
router.post("/parts-of-speech-list", PartOfSpeechController.getListPartOfSpeech)

module.exports = router;
