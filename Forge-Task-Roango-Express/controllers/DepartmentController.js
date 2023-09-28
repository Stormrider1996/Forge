const DepartmentService = require("../services/DepartmentService");
const CompanyService = require("../services/CompanyService");
const { validationResult } = require("express-validator");

class DepartmentController {
  async showV1(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const company_id = req.params.company_id;
      const department_id = req.params.department_id;
      const department = await DepartmentService.show(
        company_id,
        department_id
      );
      if (!department) {
        return res.status(404).json({ error: "Department not found" });
      }
      return res.status(200).json(department);
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  async showV2(req, res) {
    return res.status(200).json({ message: "V2" });
  }

  async listV1(req, res) {
    try {
      const departments = await DepartmentService.list();
      if (!departments) {
        return res.status(404).json({ error: "Department not found" });
      }
      return res.status(200).json({ data: departments });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async listV2(req, res) {
    return res.status(200).json({ message: "V2" });
  }

  async createV1(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      req.body.company_id = req.params.company_id;
      const department = req.body;
      console.log(department);
      const newDepartment = await DepartmentService.create(department);
      return res.status(201).json(newDepartment);
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
      const department_id = req.params.department_id;
      const department = req.body;

      const departmentValidated = await DepartmentService.show(
        company_id,
        department_id
      );
      if (!departmentValidated) {
        return res.status(404).json({ error: "Department not found" });
      }
      const updatedDepartment = await DepartmentService.update(
        department_id,
        department
      );
      return res.status(200).json(updatedDepartment);
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
      const department_id = req.params.department_id;
      const deletedDepartment = await DepartmentService.delete(department_id);
      return res.status(200).json(deletedDepartment);
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  async deleteV2(req, res) {
    return res.status(200).json({ message: "V2" });
  }
}

module.exports = new DepartmentController();
