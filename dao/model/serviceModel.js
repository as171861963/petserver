const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    name:String,
    arrange:String,
    type:String,
    sphereAp:String,
    serveAp:String,
    cost:String,
    level:String,
    price:String,
});
mongoose.model("service", serviceSchema, "service");