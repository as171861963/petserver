const mongoose = require('mongoose');
const applyShopSchema = new mongoose.Schema({
    shopName:String,
    linkman:String,
    phone:String,
    shopAddress:String,
    shopType:String,
    license:String,
    shopPhoto:String,
    openTime:String,
    closeTime:String,
    area:String,
    carport:String,
    intorduction:String,
});
mongoose.model("applyShop", applyShopSchema, "applyShop");