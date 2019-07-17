const usersModel = require("mongoose").model("users");

const login = async (user) => await usersModel.find(user);

const signIn = async (user) => await usersModel.create(user);

module.exports = {
    login, signIn
};