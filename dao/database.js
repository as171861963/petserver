var mongoose = require("mongoose");
require("./model/userModel.js");
require("./model/evaluateModel");
require("./model/service/serviceModel.js");
require("./model/applyShop/applyShopModel.js");

mongoose.connect("mongodb://172.20.10.3:27017/petsdata", { useNewUrlParser: true });
// mongoose.connect("mongodb://localhost:27017/aichongbang", { useNewUrlParser: true });
