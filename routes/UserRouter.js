const Router = require("express").Router;
const authController = require("../controllers/AuthController");

const router = new Router();

router.post("/user-info", authController.userInfo)

module.exports = router;
