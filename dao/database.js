var mongoose = require("mongoose");
require("./model/userModel.js");
require("./model/shopModel.js")
require("./model/goodsModel.js");
require("./model/evaluateModel.js");
require("./model/serviceModel.js");
require("./model/petsModel.js");
require("./model/footsModel.js");

mongoose.connect("mongodb://172.20.10.3:27017/petsdata", { useNewUrlParser: true });

mongoose.connection.on("connected", function () {
    console.log("连接成功");
});

