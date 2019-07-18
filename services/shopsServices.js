const shopsDao = require("../dao/shopsDao.js");

const addShop = async ({ shops }) => await shopsDao.addShop({ shops });

const deleteShop = async ({ _id }) => await shopsDao.deleteShop({ _id });

const updateById = async ({ _id, newAttr }) => await shopsDao.updateById({ _id, newAttr });

const getShops = async ({ curPage, eachPage }) => await shopsDao.getShops({ curPage, eachPage });

module.exports = { addShop, deleteShop, getShops, updateById };