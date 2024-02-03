const express = require("express");

const router = express.Router();

// const validate = require("../middlewares/validate-middleware")

const contactForm = require("../controller/contact-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/contact").post( contactForm);

module.exports = router;