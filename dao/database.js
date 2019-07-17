var mongoose = require("mongoose")
require("./model/petsdata")
mongoose.connect("mongodb://localhost/petsdata", { useNewUrlParser: true });
mongoose.connection.on("connected",function(){
    console.log("成功连接");
})