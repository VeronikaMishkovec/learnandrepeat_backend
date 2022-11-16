const AuthService = require("../service/AuthService");

class UserController {
    async userInfo(req, res, next) {
        const { user_id } = req.body;
        try {
            const user = await AuthService.getUserInfo(user_id)

            return res.json(user)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController();
