const express = require("express");

const router = express.Router();

const {home,register,login, user} = require("../controller/auth-controller")

const signupSchema = require("../validators/auth-validator")
const loginSchema = require("../validators/auth-validator")

const validate = require("../middlewares/validate-middleware")

const authMiddleware = require("../middlewares/auth-middleware")

// router.get("/",(req,res)=>{
//     // res.status(200).send("<h1>Hello</h1>")
// })

router.route("/").get(home);

//another way to write
router.route("/register").post( register);


//login
router.route("/login").post(login);

router.route("/user").get(authMiddleware, user);

module.exports = router;