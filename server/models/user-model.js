const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const userScheme = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});

//compare password

userScheme.methods.comparePassword = function(password) {
    return bcrypt.compare(password,this.password);
}

//json web token

userScheme.methods.generateToken = function() {
    try {
        return jwt.sign({

            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRECT_KEY,
        {
            expiresIn: "30d",
        }
        )
    } catch (error) {
        console.log(error)
    }
};


//define model or collection name

const User = new mongoose.model("User",userScheme);

module.exports = User;