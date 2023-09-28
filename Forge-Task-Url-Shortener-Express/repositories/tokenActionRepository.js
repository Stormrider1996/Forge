const TokenAction = require("../models/tokenAction");

class TokenActionService {
  async createTokenAction(userId) {
    const tokenAction = await TokenAction.create({
      entity_id: userId,
      action_name: "registration_verification",
    });
    return tokenAction;
  }

  async findTokenAction(tokenId) {
    const tokenAction = await TokenAction.findOne({ _id: tokenId });
    return tokenAction;
  }
}

module.exports = new TokenActionService();
