const CompanyService = require("../services/CompanyService");
const { validationResult } = require("express-validator");

class CompanyController {
  async paginatedV1(req, res) {
    try {
      const query = req.query;
      const companies = await CompanyService.paginated(query);
      return res.status(200).json(companies);
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
      const company_id = req.params.company_id;
      const company = await CompanyService.show(company_id);
      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }
      return res.status(200).json(company);
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
      const company = req.body;
      const newCompany = await CompanyService.create(company);
      return res.status(201).json(newCompany);
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
      const company_id = req.params.company_id;
      const company = req.body;
      const companyValidated = await CompanyService.show(company_id);
      if (!companyValidated) {
        return res.status(404).json({ error: "Company not found" });
      }
      const updatedCompany = await CompanyService.update(company_id, company);
      return res.status(200).json(updatedCompany);
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
      const company_id = req.params.company_id;
      const deletedCompany = await CompanyService.delete(company_id);
      return res.status(200).json(deletedCompany);
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  async deleteV2(req, res) {
    return res.status(200).json({ message: "V2" });
  }
}

module.exports = new CompanyController();
