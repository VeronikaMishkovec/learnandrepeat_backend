const UserModel = require("../model/UserModel");


class UserService {
    async getUserInfo(user_id) {
        const user = await UserModel.findById(user_id);
        return user
    }
}

module.exports = new UserService();
