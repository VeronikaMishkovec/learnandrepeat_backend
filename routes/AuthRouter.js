const Router = require("express").Router;
const authController = require("../controllers/AuthController");

const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth");

const router = new Router();

router.post(
  "/registration", //params: password, email
  body("email").isEmail(),
  body("password").isLength({ min: 4 }),
  authController.registration
);

router.post(
  "/login", //params: password, email
  body("email").isEmail(),
  body("password").isLength({ min: 4 }),
  authController.login
);
//
// router.post('/join', //params: password, email, code
//   body('email').isEmail(),
//   body('password').isLength({min:4}),
//   authController.join
// )
//
// router.post('/logout', authController.logout) //params: token
//
router.post("/refresh", authController.refresh); //params: token

module.exports = router;
