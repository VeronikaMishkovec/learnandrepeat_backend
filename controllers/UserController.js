const UserService = require("../service/UserService");

class UserController {
    async userInfo(req, res, next) {
        const { user_id } = req.body;
        try {
            const user = await UserService.getUserInfo(user_id)

            return res.json(user)
        } catch (e) {
            next(e)
        }
    }

    async updateUserInfo(req, res, next) {
        const { user_id, first_name, second_name, learning_languages } = req.body;
        try {
            const user = await UserService.updateUserInfo(user_id, first_name, second_name, learning_languages)
            return res.json(user)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController();
