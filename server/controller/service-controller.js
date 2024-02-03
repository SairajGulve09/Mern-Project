const Service = require("../models/service-model")

const services = async(req,res) =>{
    try {
        const response = await Service.find();

        if(!response){
            res.status(400).json({msg: "No services Found"});
            return;
        }
        res.status(200).json({msg: response})
    } catch (error) {
        console.log("Error in services: ",error);
    }
}


module.exports = services;