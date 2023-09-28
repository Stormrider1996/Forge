const User = require("../models/user");

class userRepository {
  async storeUser(username, email, password) {
    const user = await User.create({
      username: username,
      email: email,
      password: password,
    });

    return user;
  }

  async findUserByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async updateRefreshToken(email, password, refreshToken) {
    const user = await this.findUserByEmail(email, password);
    user.refreshToken = refreshToken;
    await user.save();
  }

  async findUserByRefreshToken(refreshToken) {
    const user = await User.findOne({ refreshToken });
    return user;
  }

  async findUserById(_id) {
    const user = await User.findOne({ _id });
    return user;
  }

  async findUserByUsername(username) {
    const user = await User.findOne({ username });
    return user;
  }

  async removeRefreshToken(userId) {
    const user = await this.findUserById(userId);
    user.refreshToken = null;
    await user.save();
  }
}

module.exports = new userRepository();
