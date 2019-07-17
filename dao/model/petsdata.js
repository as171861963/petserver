const mongoose = require('mongoose');
const petsdataSchema = new mongoose.Schema({
    name: String,
    content: String,
    time: String
});
mongoose.model("petsdata", petsdataSchema, "petsdata");