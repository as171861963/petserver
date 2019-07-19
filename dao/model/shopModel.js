const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema({
    name: String,
    contact: String,
    phone:String,
    addr:String,
    type:String,
    license:String,
    imgs:String,
    startTime:String,
    endTime:String,
    area:String,
    parking:String,
    wifi:String,
    brief:String,
    managerId:{ type:mongoose.Schema.Types.ObjectId,ref:"users" },
    status:String
});
mongoose.model("shop", shopSchema, "shop");