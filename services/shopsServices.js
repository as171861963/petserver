const shopsDao = require("../dao/shopsDao.js");

const addShop = async ({ shops }) => await shopsDao.addShop({ shops });

const getUnhandledShop = async () => await shopsDao.getUnhandledShop();

const deleteShop = async ({ _id }) => await shopsDao.deleteShop({ _id });

const getShopsByManagerId = async ({ managerId }) => await shopsDao.getShopsByManagerId({ managerId });

const updateById = async ({ _id, newAttr }) => await shopsDao.updateById({ _id, newAttr });

module.exports = { addShop, deleteShop, updateById, getUnhandledShop, getShopsByManagerId };