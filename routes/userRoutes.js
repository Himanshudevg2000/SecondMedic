const express = require("express")

const router = express.Router();
const userController = require("../controllers/userRegister")

router.post("/register", userController.register );

router.get("/", userController.check );

router.post("/getUser", userController.getUser );

router.post("/editUser", userController.editUser );

module.exports = router;