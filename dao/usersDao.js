const usersModel = require("mongoose").model("users");

const login = async (user) => await usersModel.find(user);

const signIn = async (user) => await usersModel.create(user);

const getUserManage = async data => await usersModel.find({ identity: data.identity, status: "审核中" })

const updataUserStatus = async (data, _id) => await usersModel.update({ _id }, data)

module.exports = {
    login, signIn, getUserManage, updataUserStatus
};