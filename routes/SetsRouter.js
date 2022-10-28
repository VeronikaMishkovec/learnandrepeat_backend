const Router = require("express").Router;

const SetsController = require("../controllers/setController");

const router = new Router();

router.post("/create-new-set", SetsController.createNewSet);
router.post("/get-all-sets", SetsController.getAllSets);
router.post("/start-learning", SetsController.startLearningSet);
router.post("/delete-set", SetsController.deleteSet);
router.post("/update-set", SetsController.updateSet);

module.exports = router;
