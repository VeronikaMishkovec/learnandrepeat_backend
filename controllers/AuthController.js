const AuthService = require("../service/authService");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/apiError");

class AuthController {
  async registration(req, res, next) {
    const { email, password } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Невалидный email или пароль", errors.array())
        );
      }
      const user = await AuthService.registration(email, password);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await AuthService.login(email, password);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  // async logout(req, res, next) {
  //   const {token} = req.body
  //   try {
  //     const refreshToken = await AuthService.logout(token)
  //     res.json(refreshToken)
  //   } catch (e) {
  //     next(e)
  //   }
  // }

  async refresh(req, res, next) {
    const { token } = req.body;
    try {
      const refreshToken = await AuthService.refresh(token);
      res.json(refreshToken);
    } catch (e) {
      next(e);
    }
  }

  // async join(req, res, next) {
  //   const {email, password, code} = req.body
  //   try {
  //     const errors = validationResult(req)
  //     if(!errors.isEmpty()){
  //       return next(ApiError.BadRequest('Невалидный email или пароль', errors.array()))
  //     }
  //     const group = await AuthService.join(email, password, code)
  //     res.json(group)
  //   } catch (e) {
  //     next(e)
  //   }
  // }
}

module.exports = new AuthController();
