var mongoose = require("mongoose");
require("./model/userModel.js");
require("./model/evaluateModel");

mongoose.connect("mongodb://172.20.10.3:27017/petsdata", { useNewUrlParser: true });
// mongoose.connect("mongodb://localhost:27017/aichongbang", { useNewUrlParser: true });
mongoose.connection.on("connected",function(){
    console.log("成功连接");
})