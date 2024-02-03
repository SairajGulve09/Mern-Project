const {Schema, model}= require("mongoose");


// service
// "Web Development"
// description
// "Crafting tailor-made websites and web applications."
// price
// "$1,500 - $7,000"
// provider
// "Sairaj Gulve"

const serviceSchema = new Schema({
    service:{type:String,require: true},
    description:{type:String,require: true},
    price:{type:String,require: true},
    provider:{type:String,require: true},
});


const Service = new model("Service", serviceSchema);

module.exports = Service;
