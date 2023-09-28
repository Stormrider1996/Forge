const DepartmentRepository = require("../repositories/DepartmentRepository");

class DepartmentService {
  constructor() {}

  async show(company_id, department_id) {
    return await DepartmentRepository.show(company_id, department_id);
  }

  async list() {
    return await DepartmentRepository.list();
  }

  async create(department) {
    return await DepartmentRepository.create(department);
  }

  async update(department_id, department) {
    return await DepartmentRepository.update(department_id, department);
  }

  async delete(department_id) {
    return await DepartmentRepository.delete(department_id);
  }
}

module.exports = new DepartmentService();
