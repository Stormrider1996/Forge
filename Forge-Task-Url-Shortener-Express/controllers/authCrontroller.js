const authService = require("../services/authService");
const { validationResult } = require("express-validator");

class authController {
  async storeUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, email, password } = req.body;
      const user = await authService.storeUser(username, email, password);
      const mailOptions = await authService.generateEmail(user.id);
      nodemailerTransporter.sendMail(mailOptions, (err) => {
        if (err) {
          return res.status(500).send("Failed to send email.");
        } else {
          return res.status(200).json({ message: "Email sent successfully." });
        }
      });
    } catch (error) {
      if (
        error.message == "Email already exists" ||
        error.message == "Username already exists"
      ) {
        return res.status(409).json({
          message: error.message,
        });
      } else {
        return res.status(500).json({
          message: "Something went wrong",
        });
      }
    }
  }

  async resendVerificationEmail(req, res) {
    try {
      const { email } = req.body;
      const user = await authService.findUserByEmail(email);
      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      if (user.emailVerifiedAt) {
        return res.status(400).json({ error: "Email already verified" });
      }

      const mailOptions = await authService.generateEmail(user.id);
      nodemailerTransporter.sendMail(mailOptions, (err) => {
        if (err) {
          return res.status(500).send("Failed to send email.");
        } else {
          return res.status(200).send("Email sent successfully.");
        }
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
      });
    }
  }

  async handleVerifyEmail(req, res) {
    const { token } = req.params;
    try {
      const actionTokenExists = await authService.findTokenAction(token);
      if (!actionTokenExists) {
        return res.status(404).json({
          message:
            "Can't verify your email. Try again or resend verification email!",
        });
      }

      if (actionTokenExists.executed_at) {
        return res.status(403).json({
          message:
            "Can't verify your email because the verification link has already been used! Resend the verification email.",
        });
      }

      const executionTime = new Date();
      if (actionTokenExists.expires_at.getTime() < executionTime.getTime()) {
        return res.status(403).json({
          message:
            "Can't verify your email because the verification link has expired. Resend the verification email!",
        });
      }

      const user = await authService.findUserById(actionTokenExists.entity_id);
      if (!user) {
        return res.status(500).json({
          message: "Something went wrong! Resend the verification email.",
        });
      }

      if (user.emailVerifiedAt) {
        return res.status(403).json({ message: "Email is already verified!" });
      }

      user.emailVerifiedAt = new Date();
      await user.save();

      actionTokenExists.executed_at = new Date();
      await actionTokenExists.save();

      return res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
      });
    }
  }

  async handleLogin(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;
      const { accessToken, refreshToken } = await authService.handleLogin(
        email,
        password
      );

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({ accessToken });
    } catch (error) {
      if (
        error.message == "User not found" ||
        error.message == "Incorrect password" ||
        error.message == "Email not verified"
      ) {
        return res.status(401).json({
          message: error.message,
        });
      } else {
        return res.status(500).json({
          message: "Something went wrong",
        });
      }
    }
  }

  async handleRefreshToken(req, res) {
    try {
      const cookies = req.cookies;
      if (!cookies?.jwt) return res.sendStatus(401);
      const refreshToken = cookies.jwt;

      const user = await authService.findUserByRefreshToken(refreshToken);
      if (!user) return res.sendStatus(403);

      const accessToken = await authService.generateAccessToken(user._id);
      res.json({ accessToken });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }

  async handleLogout(req, res) {
    try {
      const cookies = req.cookies;
      if (!cookies?.jwt)
        return res.status(200).json({ message: "Logged out successfully" });
      const refreshToken = cookies.jwt;

      const user = await authService.findUserByRefreshToken(refreshToken);
      if (!user)
        return res.status(200).json({ message: "Logged out successfully" });

      await authService.removeRefreshToken(user.id);
      res.clearCookie("jwt", { httpOnly: true, sameSite: "None" });
      return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}

module.exports = new authController();
