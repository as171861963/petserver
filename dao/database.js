var mongoose = require("mongoose");
require("./model/userModel.js");
require("./model/shopModel.js")

mongoose.connect("mongodb://localhost:27017/petsdata", { useNewUrlParser: true });
mongoose.connection.on("connected",function(){
    console.log("成功连接");
})