const applyShopModel=require("mongoose").model("applyShop");

const apply =async (shop) =>await applyShopModel.find(shop);

module.exports={
    apply
}