const mongoose = require("mongoose");
const petsSchema = new mongoose.Schema({
    name: String,
    type: String,
    addr: String,
    age: String,
    price: String,
    color: String,
    gender: String,
    stock: String,
    somatotype: String,
    vaccine: String,
    describe: String,
    managerId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
})
mongoose.model("pets", petsSchema, "pets")