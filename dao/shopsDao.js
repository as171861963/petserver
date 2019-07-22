const shopsModel = require("mongoose").model("shop");

const addShop = async ({ shops }) => await shopsModel.create(shops);

const getUnhandledShop = async () => await shopsModel.find({ status:"审核中" }).populate("managerId");

const deleteShop = async ({ _id }) => await shopsModel.remove({ _id });

const updateById = async ({ _id, newAttr }) => await shopsModel.update({ _id }, newAttr);

const getShopsByManagerId = async ({ managerId }) => await shopsModel.find({managerId}).populate("managerId");

module.exports = { addShop, deleteShop, updateById, getShopsByManagerId, getUnhandledShop};