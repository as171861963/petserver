const applyApi=require("../dao/model/applyShop/applyShopDao.js");

const apply =async(shop)=>await applyApi.apply(shop);

module.exports = {
    apply
};