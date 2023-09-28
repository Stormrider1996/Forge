const { connect } = require("../config/db.config");

class DepartmentRepository {
  db = {};

  constructor() {
    this.db = connect();
  }

  async show(company_id, department_id) {
    const id = department_id;
    const department = await this.db.departments.findAll({
      where: {
        company_id,
        id,
      },
    });
    return department;
  }

  async list() {
    const departments = await this.db.departmentDbView.findAll();

    return departments;
  }

  async create(department) {
    const newDepartment = await this.db.departments.create(department);

    return newDepartment;
  }

  async update(department_id, departmentData) {
    const department = await this.db.departments.findByPk(department_id);

    await department.update({
      ...departmentData,
    });

    return department;
  }

  async delete(department_id) {
    const department = await this.db.departments.findByPk(department_id);

    await this.db.departments.update(
      { parent_id: null },
      {
        where: { parent_id: department_id },
      }
    );

    await department.destroy();

    return true;
  }
}

module.exports = new DepartmentRepository();
