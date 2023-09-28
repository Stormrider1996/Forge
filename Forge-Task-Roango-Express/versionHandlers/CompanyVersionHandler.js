const CompanyController = require("../controllers/CompanyController");

class CompanyVersionHandler {
  async paginated(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await CompanyController.paginatedV1(req, res);
        break;
      case "v2":
        await CompanyController.paginatedV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async show(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await CompanyController.showV1(req, res);
        break;
      case "v2":
        await CompanyController.showV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async create(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await CompanyController.createV1(req, res);
        break;
      case "v2":
        await CompanyController.createV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async update(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await CompanyController.updateV1(req, res);
        break;
      case "v2":
        await CompanyController.updateV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }

  async delete(req, res) {
    const version = req.params.version.toLowerCase();
    switch (version) {
      case "v1":
        await CompanyController.deleteV1(req, res);
        break;
      case "v2":
        await CompanyController.deleteV2(req, res);
        break;
      default:
        return res.status(404).json({ error: "version not found" });
    }
  }
}

module.exports = new CompanyVersionHandler();
