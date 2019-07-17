const usersApi = require("../dao/usersDao.js");

const login = async (user) => await usersApi.login(user);

const signIn = async (user) => await usersApi.signIn(user);

module.exports = {
    login, signIn
};