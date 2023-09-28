const UserController = require("../controllers/UserController");

class UserVersionHandler {
  async paginated(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await UserController.paginatedV1(req, res);
        break;
      case "v2":
        await UserController.paginatedV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async show(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await UserController.showV1(req, res);
        break;
      case "v2":
        await UserController.showV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async create(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await UserController.createV1(req, res);
        break;
      case "v2":
        await UserController.createV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async update(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await UserController.updateV1(req, res);
        break;
      case "v2":
        await UserController.updateV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async delete(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await UserController.deleteV1(req, res);
        break;
      case "v2":
        await UserController.deleteV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }
}

module.exports = new UserVersionHandler();
