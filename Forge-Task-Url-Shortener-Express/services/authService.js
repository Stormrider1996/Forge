const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");
const tokenActionRepository = require("../repositories/tokenActionRepository");
const bcrypt = require("bcrypt");
class authService {
  async storeUser(username, email, password) {
    const checkEmail = await userRepository.findUserByEmail(email);
    const checkUsername = await userRepository.findUserByUsername(username);
    if (checkEmail) {
      throw new Error("Email already exists");
    }
    if (checkUsername) {
      throw new Error("Username already exists");
    }

    const user = await userRepository.storeUser(username, email, password);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.save();

    return user;
  }

  async generateEmail(userId) {
    const user = await userRepository.findUserById(userId);
    const token = await tokenActionRepository.createTokenAction(userId);

    const link = `${process.env.MAILTRAPBASE_URL}/auth/verify-email/${token.id}`;

    const mailOptions = {
      from: "your_email@example.com",
      to: user.email,
      subject: "Account Verification Link",
      text: `Hi ${user.username},\n\nPlease click on the following link to verify your email address:\n\n${link}\n\nThe link will expire in 15 minutes.\n\nIf you did not request this, please ignore this email.\n\nThank you,\nYour App Team`,
    };

    return mailOptions;
  }

  async findUserByEmailAndPassword(email, password) {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return user;
    } else {
      throw new Error("Incorrect password");
    }
  }

  async findUserByRefreshToken(refreshToken) {
    const user = await userRepository.findUserByRefreshToken(refreshToken);
    return user;
  }

  async findTokenAction(tokenId) {
    const token = await tokenActionRepository.findTokenAction(tokenId);
    return token;
  }

  async findUserById(userId) {
    const user = await userRepository.findUserById(userId);
    return user;
  }

  async findUserByEmail(email) {
    const user = await userRepository.findUserByEmail(email);
    return user;
  }

  generateAccessToken(userId) {
    const accessToken = jwt.sign(
      {
        userId: userId,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10s" }
    );
    return accessToken;
  }

  generateRefreshToken(userId) {
    const refreshToken = jwt.sign(
      {
        userId: userId,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    return refreshToken;
  }

  async handleLogin(email, password) {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }

    if (!user.emailVerifiedAt) {
      throw new Error("Email not verified");
    }

    const accessToken = this.generateAccessToken(email);
    const refreshToken = await this.generateRefreshToken(email);
    await userRepository.updateRefreshToken(email, password, refreshToken);
    return { accessToken, refreshToken };
  }

  async removeRefreshToken(userId) {
    await userRepository.removeRefreshToken(userId);
  }
}

module.exports = new authService();
