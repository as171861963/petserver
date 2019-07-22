const usersApi = require("../dao/usersDao.js");

const login = async (user) => await usersApi.login(user);

const signIn = async (user) => await usersApi.signIn(user);

const getUserManage = async data => await usersApi.getUserManage(data)

const updataUserStatus = async (data, _id) => await usersApi.updataUserStatus(data, _id)

module.exports = {
    login, signIn, getUserManage, updataUserStatus
};