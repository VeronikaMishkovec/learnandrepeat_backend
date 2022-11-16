const UserModel = require('../model/UserModel')

class UserService {
    async userInfo(user_id) {
        const user = await UserModel.findOne({ _id: user_id })
        return user
    }
}

module.exports = new UserService();
