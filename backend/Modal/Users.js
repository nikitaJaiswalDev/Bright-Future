const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: {type: String, required: true},
    email: { type: String, required: true },
    role: {type: String, required: true},
    gender: {type: String, required: true},
    dob: {type: String, required: true},
    country: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    zip_code: {type: Number, required: true},
    phone_code: {type: Number, required: true},
    phone_number: {type: Number, default: null},
    bio: {type: String, default: null},
    profile_image: {type: String, data: Buffer},
    // token: { type: String },s
}, {strict: false});



module.exports = mongoose.model("user", userSchema);