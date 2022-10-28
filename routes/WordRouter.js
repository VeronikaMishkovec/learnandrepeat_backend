const Router = require("express").Router;

const WordController = require("../controllers/WordController");

const router = new Router();

router.post("/add-new-word", WordController.createNewWord);
router.post("/set-words", WordController.getWordsList);
router.post("/update-word", WordController.updateWord);
router.post("/delete-word", WordController.deleteWord);

module.exports = router;
