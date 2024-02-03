const User = require("../models/user-model")
const contact = require("../models/contact-model")

const getAllUsers = async(req,res) =>{

    try {
        const users = await User.find({},{password:0});

        if(!users || users.length===0){
            res.status(404).json({message : "No users found"});
        }

        return res.status(200).json(users);
    } catch (error) {
        console.log("Error in getting all users", error);
        next(error);
    }

    
}

const getAllContacts = async(req,res)=>{
    try {
        const contacts = await contact.find();

        if(!contacts || contacts.length===0)
        {
            res.status(404).json({message:"No contacts founds"})
        }

        return res.status(200).json(contacts);
    } catch (error) {
        console.log("error in getting contacts");
        next(error)
    }
}

const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({msg:"User deleted successfully..."})
    } catch (error) {
        console.log("Error in deleteUser controller",error);
    }
}

const getUserById = async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id},{password:0});
        return res.status(200).json(data)
    } catch (error) {
        console.log("Error in fetching single user controller",error);
    }
}

const updateUserById = async(req,res) =>{
    try {
        const id = req.params.id;
        const data = req.body;

        const updatedUser = await User.updateOne({_id:id},{$set:data});
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.log("Error in updating user by id in backend",error);
    }
}

module.exports = {getAllUsers,getAllContacts,deleteUser,getUserById,updateUserById};