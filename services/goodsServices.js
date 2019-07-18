const goodsApi = require("../dao/goodsDao.js");

const getGoods = async () => await goodsApi.getGoods();

const addGoods = async (goods) => await goodsApi.addGoods(goods);

const deleteById = async (_id) => await goodsApi.deleteById(_id);

const updateByAttr = async ({_id, attr, newValue}) => await goodsApi.updateByAttr({_id, attr, newValue});

module.exports = {
    getGoods, addGoods, deleteById, updateByAttr
};