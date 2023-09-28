const DepartmentController = require("../controllers/DepartmentController");

class DepartmentVersionHandler {
  async show(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await DepartmentController.showV1(req, res);
        break;
      case "v2":
        await DepartmentController.showV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async list(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await DepartmentController.listV1(req, res);
        break;
      case "v2":
        await DepartmentController.listV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async create(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await DepartmentController.createV1(req, res);
        break;
      case "v2":
        await DepartmentController.createV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async update(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await DepartmentController.updateV1(req, res);
        break;
      case "v2":
        await DepartmentController.updateV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async delete(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await DepartmentController.deleteV1(req, res);
        break;
      case "v2":
        await DepartmentController.deleteV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }
}

module.exports = new DepartmentVersionHandler();
