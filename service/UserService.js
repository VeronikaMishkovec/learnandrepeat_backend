const UserModel = require("../model/UserModel");


class UserService {
    async getUserInfo(user_id) {
        const user = await UserModel.findById(user_id);
        return user
    }

    async updateUserInfo(user_id, first_name, second_name, learning_languages) {
        const current_user = await UserModel.findByIdAndUpdate(user_id, {
            first_name,
            second_name,
            learning_languages,
        });

        return current_user
    }
}

module.exports = new UserService();
