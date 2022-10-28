const ApiError = require("../exceptions/apiError");
const tokenService = require("../service/TokenService");

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ status: err.status, message: err.message });
  }
  return res.status(500).json({ message: "Unexpected error" });
  // try {
  //   const authtorizationHeader = req.headers.authorization;
  //   if (!authtorizationHeader) {
  //     return next(ApiError.UnAuthError());
  //   }
  //
  //   const accessToken = authtorizationHeader.split(" ")[1];
  //   if (!accessToken) {
  //     return next(ApiError.UnAuthError())
  //   }
  //
  //   const userData = tokenService.validateAccessToken(accessToken);
  //   if (!userData) {
  //     return next(ApiError.UnAuthError());
  //   }
  //
  //   req.user = userData;
  //   next();
  // } catch (e) {
  //   return next(ApiError.UnAuthError());
  // }
};
