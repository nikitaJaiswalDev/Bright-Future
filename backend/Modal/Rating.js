const mongoose = require("mongoose");

const Rating = new mongoose.Schema({

    
},{timestamps: true});



module.exports = mongoose.model("rating", Rating);