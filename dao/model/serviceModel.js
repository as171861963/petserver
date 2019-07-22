const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    name: String,
    startTime: String,
    endTime: String,
    type: String,
    brief: String,
    costTime: String,
    price: String,
    imgs:String,
    managerId:{ type:mongoose.Schema.Types.ObjectId,ref:"users" },
    shopId:{ type:mongoose.Schema.Types.ObjectId,ref:"shop" },
});
mongoose.model("service", serviceSchema, "service");