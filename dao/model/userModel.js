const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    phone:String,
    email:String,
    name:String,
    identity:String,
    status:String
});
mongoose.model("users", userSchema, "users");