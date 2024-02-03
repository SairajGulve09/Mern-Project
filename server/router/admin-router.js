const express = require("express");
const {getAllUsers,getAllContacts,deleteUser,getUserById,updateUserById} = require("../controller/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.route("/users").get(authMiddleware,getAllUsers);

router.route("/contacts").get(authMiddleware,getAllContacts);

router.route("/users/delete/:id").delete(authMiddleware,deleteUser);

router.route("/users/:id").get(authMiddleware,getUserById);

router.route("/users/update/:id").patch(authMiddleware,updateUserById);

module.exports = router;