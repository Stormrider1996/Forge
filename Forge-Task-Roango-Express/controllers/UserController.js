const UserService = require("../services/UserService");
const { validationResult } = require("express-validator");

class UserController {
  async paginatedV1(req, res) {
    try {
      const query = req.query;
      const users = await UserService.paginated(query);
      return res.status(200).json(users);
    } catch (error) {
      if (error.message === "Invalid filter key") {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: "Something went wrong" });
      }
    }
  }

  async paginatedV2(req, res) {
    return res.status(200).json({ message: "V2" });
  }

  async showV1(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user_id = req.params.user_id;
      const user = await UserService.show(user_id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  async showV2(req, res) {
    return res.status(200).json({ message: "V2" });
  }

  async createV1(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = req.body;
      const newUser = await UserService.create(user);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createV2(req, res) {
    return res.status(200).json({ message: "V2" });
  }

  async updateV1(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user_id = req.params.user_id;
      const user = req.body;
      const userValidated = await UserService.show(user_id);
      if (!userValidated) {
        return res.status(404).json({ error: "User not found" });
      }
      const updatedUser = await UserService.update(user_id, user);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateV2(req, res) {
    return res.status(200).json({ message: "V2" });
  }

  async deleteV1(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user_id = req.params.user_id;
      const deletedUser = await UserService.delete(user_id);
      return res.status(200).json(deletedUser);
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  async deleteV2(req, res) {
    return res.status(200).json({ message: "V2" });
  }
}

module.exports = new UserController();
