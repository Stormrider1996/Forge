const { connect } = require("../config/db.config");

class CompanyRepository {
  db = {};

  constructor() {
    this.db = connect();
  }

  async paginated(query) {
    const limit = query.limit;
    const offset = query.offset;
    const order = query.order;
    const where = query.where;

    const companies = await this.db.companies.findAndCountAll({
      limit,
      offset,
      order,
      where,
    });

    return companies;
  }

  async show(company_id) {
    const company = await this.db.companies.findByPk(company_id);

    return company;
  }

  async create(company) {
    const newCompany = await this.db.companies.create(company);

    return newCompany;
  }

  async update(company_id, companyData) {
    const company = await this.db.companies.findByPk(company_id);

    await company.update({
      ...companyData,
    });

    return company;
  }

  async delete(company_id) {
    const company = await this.db.companies.findByPk(company_id);

    await company.destroy();

    return true;
  }
}

module.exports = new CompanyRepository();
