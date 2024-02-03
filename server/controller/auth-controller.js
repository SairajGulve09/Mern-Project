const User = require("../models/user-model")
const bcrypt = require("bcryptjs");

const home = async (req,res) =>{
    try{
        res.status(200).send("<h1>Hello</h1>")
    }catch(error){
        console.log(error)
    }
}

const register = async (req,res) =>{
    try {

        console.log(req.body);

        const {username,email,phone,password} = req.body;
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(401).json({msg:"User already exist"})
        }

        //bcrypt the password
        const saltRound = 10;
        const bcryptPassword = await bcrypt.hash(password,saltRound);

        const userCreated = await User.create({username,email,phone,password:bcryptPassword,});

        console.log(userCreated);
        res.status(200).json(
            {
                
                msg:"Registration Successful...",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
            }
        );

    } catch (error) {
        console.log(error)
    }
}

//login
const login = async(req,res) =>{
    try {
        const{email,password} = req.body;

        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(401).json({msg:"Invalid Credientials: User not exist!!"})
        }

        // const user = await bcrypt.compare(password,userExist.password)

        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json(
                {
                    msg:"Login Successfull...",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString(),
                }
            );
        }
        else{
            res.status(401).json({msg:"Invalid username or password"});
        }

    } catch (error) {
        console.log(error)
    }
}

//user logic
//to send user data

const user = async(req,res) =>{
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log("Error from user route: " + error);
    }
}

module.exports = {home,register,login, user}