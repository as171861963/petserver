var mongoose = require("mongoose");
require("./model/userModel.js");
<<<<<<< HEAD
require("./model/shopModel.js")

=======
require("./model/goodsModel.js");
require("./model/applyShop/applyShopModel.js");
require("./model/service/serviceModel.js");


>>>>>>> c734d88cedd2cda5848973e5db280c8af24b91f2
mongoose.connect("mongodb://localhost:27017/petsdata", { useNewUrlParser: true });
mongoose.connection.on("connected",function(){
    console.log("成功连接");
})