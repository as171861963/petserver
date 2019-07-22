const mongoose = require("mongoose");
const footsSchema = new mongoose.Schema({
    name: String,
    type: String,
    texture: String,
    madeWay:String,
    for:String,
    sepcialFor: String,
    size: String,
    flavor:String,
    feature: String,
    addr: String,
    madeTime: String,
    keepTime: String,
    brief:String,
    price:String,
    imgs:String,
    managerId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
})
mongoose.model("foots", footsSchema, "foots")