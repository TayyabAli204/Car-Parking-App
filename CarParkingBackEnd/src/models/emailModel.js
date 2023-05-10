const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
    email:{
        require: true,
        type: String,
        unique: true
    },
    text:String,
    password:String
})

const emailCollection = mongoose.model("emailVerfication",emailSchema);
const tokenCollection= mongoose.model("emailVerfication",emailSchema);

module.exports = {emailCollection,tokenCollection}