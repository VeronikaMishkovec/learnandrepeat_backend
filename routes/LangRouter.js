const Router = require("express").Router;
const LangController = require("../controllers/LangController");

const router = new Router();

router.post("/create-lang", LangController.createLang)
router.post("/lang-list", LangController.getListLang)

module.exports = router;
