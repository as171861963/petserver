const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema({
    name:String,
    licenseNo:String,
    licensePicture:String,
    address:String,
    location:String,
    legalEntity:String,
    contactNumber:String,
    photo:String,
    features:String,
    VIPlevel:String,
    ratio:String,
    attribute:String
});
mongoose.model("shop", shopSchema, "shop");