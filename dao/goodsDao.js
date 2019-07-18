const goodsModel = require("mongoose").model("goods");

const getGoods = async () => await goodsModel.find();

const addGoods = async (goods) => await goodsModel.create(goods);

const deleteById = async (_id) => await goodsModel.remove({_id});

const updateByAttr = async ({_id, attr, newValue}) => await goodsModel.update({_id},{ [attr]:newValue });

module.exports = {
    getGoods, addGoods, deleteById, updateByAttr
};