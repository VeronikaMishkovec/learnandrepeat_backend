const Router = require("express").Router;
const UserController = require("../controllers/UserController");

const router = new Router();

router.post("/user-info", UserController.userInfo)

module.exports = router;
