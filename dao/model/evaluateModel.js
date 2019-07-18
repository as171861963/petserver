const mongoose = require('mongoose');
const evaluateSchema = new mongoose.Schema({
    order: String,
    shop: String,
    sum: String,
    score: Number,
    evaluate: String,
    uploadImg: String,
    nature: String,
    evaluater: String
});
mongoose.model("evaluates", evaluateSchema, "evaluates");//模板名，。。。。集合名