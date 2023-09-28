const express = require("express");
const router = express.Router();
const authController = require("../controllers/authCrontroller");
const registerValidations = require("../validations/registerValidations");
const loginValidations = require("../validations/loginValidations");

router.post("/register", registerValidations, authController.storeUser);
router.post("/login", loginValidations, authController.handleLogin);
router.get("/logout", authController.handleLogout);
router.get("/refresh", authController.handleRefreshToken);
router.get("/verify-email/:token", authController.handleVerifyEmail);
router.post("/resend-verification", authController.resendVerificationEmail);

module.exports = router;
