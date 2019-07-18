const shopsModel = require("mongoose").model("shop");

const addShop = async ({ shops }) => await shopsModel.create(shops);

const deleteShop = async ({ _id }) => await shopsModel.remove({ _id });

const updateById = async ({ _id, newAttr }) => await shopsModel.update({ _id }, newAttr);

const getShops = async ({ curPage, eachPage }) => {
    let result = {
        rows: [],
        total: 0,
        maxPage: 0,
    }
    result.total = await shopsModel.countDocuments();
    result.rows = await shopsModel
        .find()
        .skip((curPage - 1) * eachPage)
        .limit(eachPage)
        .sort({
            _id: 1
        })
        .exec();
    result.maxPage = Math.ceil(result.total / eachPage);
    return result;
}

module.exports = { addShop, deleteShop, getShops, updateById };