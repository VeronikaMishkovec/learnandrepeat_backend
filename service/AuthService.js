const UserModel = require("../model/UserModel");
// const GroupModel = require('../models/users/groupModel')
const bcrypt = require("bcrypt");
const tokenService = require("../service/TokenService");
const ApiError = require("../exceptions/apiError");

class AuthService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest("Пользователь с таким email уже существует");
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await UserModel.create({
      email,
      password: hashPassword,
    });

    const tokens = tokenService.generateTokens({
      id: user._id,
      email: user.email,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, user_id: user._id };
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest("No user with this email. Please register");
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password);
    if (!isPasswordEquals) {
      throw ApiError.BadRequest("Неверный пароль");
    }

    const tokens = tokenService.generateTokens({
      id: user._id,
      email: user.email,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, user_id: user._id, email: user.email };
  }

  // async logout(refreshToken){
  //   const token = await tokenService.removeToken(refreshToken)
  //   return token
  // }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnAuthError();
    }

    const authData = tokenService.validateRefreshToken(refreshToken);
    const dbToken = await tokenService.findToken(refreshToken);
    if (!authData || !dbToken) {
      throw ApiError.UnAuthError();
    }

    const user = await UserModel.findById(authData.id);

    const tokens = tokenService.generateTokens({
      id: user._id,
      email: user.email,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, userId: user._id, email: user.email };
  }

  async getUserInfo(user_id) {
    const user = await UserModel.findById(user_id);
    return user
  }
}

module.exports = new AuthService();
