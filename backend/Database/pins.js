const mongoose = require("mongoose");

const pinSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    email: String
}, {
    timestamps: true
})

const Pin = mongoose.model("pin", pinSchema);

module.exports = Pin;