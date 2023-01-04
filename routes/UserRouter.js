const Router = require("express").Router;
const UserController = require("../controllers/UserController");

const router = new Router();

router.post("/user-info", UserController.userInfo)
router.post("/update-user-info", UserController.updateUserInfo)

module.exports = router;
