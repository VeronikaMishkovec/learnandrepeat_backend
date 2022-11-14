const UserService = require('../service/UserService')

class UserController {
    async getUserInfo(req, res, next) {
        const { user_id } = req.body
        try {
            const user = await UserService.userInfo(user_id)
            return res.json(user)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()
