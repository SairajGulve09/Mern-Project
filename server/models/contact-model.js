const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const contactSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },

});

const contact = new mongoose.model("Contact",contactSchema);

module.exports = contact;