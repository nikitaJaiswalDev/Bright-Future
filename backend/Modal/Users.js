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
    address: {type: String, required: true},
    zip_code: {type: Number, required: true},
    phone_code: {type: Number, required: true},
    phone_number: {type: Number, default: null},
    bio: {type: String, default: null},
    profile_image: {type: Array, data: Buffer},

    degree: { type: String, default: null},
    institute: { type: String, default: null},
    edu_year: { type: String, default: null},
    education_description: { type: String, default: null},
    education_document: { type: Array, data: Buffer,default: null},

    organization: { type: String, default: null},
    designation: { type: String, default: null},
    exp_year: { type: String, default: null},
    exp_description: { type: String, default: null},
    exp_document: { type: Array, data: Buffer,default: null},

    teaching_exp: { type: String, default: null},
    language_preference: { type: String, default: null},
    mode_of_teaching: { type: String, default: null},
    fees_from: { type: String, default: null},
    fees_to: { type: String, default: null},
    fees_currency: { type: String, default: null},


    // token: { type: String },
},{timestamps: true}, {strict: false});



module.exports = mongoose.model("user", userSchema);