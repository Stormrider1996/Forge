const CompanyRepository = require("../repositories/CompanyRepository");

class CompanyService {
  constructor() {}

  validateQuery(query) {
    let { page, limit, sort, order, filter } = query;

    page = parseInt(page) || "1";
    limit = parseInt(limit) || "10";
    sort = String(sort);
    order = String(order);
    filter = Object(filter);

    const validSortColumns = ["id", "name", "created_at", "updated_at"];

    const validOrderValues = ["ASC", "DESC"];

    const validFilterKeys = ["name"];

    for (let key in filter) {
      if (!validFilterKeys.includes(key)) {
        throw new Error("Invalid filter key");
      }
    }

    if (!validSortColumns.includes(sort)) {
      sort = "created_at";
      query.sort = "created_at";
    }

    if (!validOrderValues.includes(order)) {
      order = "DESC";
      query.order = "DESC";
    }

    return { page, limit, sort, order, filter };
  }

  formatResponse(query, result) {
    return {
      ...result,
      ...query,
    };
  }

  async paginated(query) {
    const { page, limit, sort, order, filter } = this.validateQuery(query);

    const offset = (page - 1) * limit;

    const options = {
      limit,
      offset,
      order: [[sort, order]],
      where: filter,
    };

    const { rows: companies, count } = await CompanyRepository.paginated(
      options
    );

    const totalPages = Math.ceil(count / limit);

    return this.formatResponse(query, {
      companies,
      count,
      totalPages,
      page,
      limit,
    });
  }

  async show(company_id) {
    return await CompanyRepository.show(company_id);
  }

  async create(company) {
    return await CompanyRepository.create(company);
  }

  async update(company_id, company) {
    return await CompanyRepository.update(company_id, company);
  }

  async delete(company_id) {
    return await CompanyRepository.delete(company_id);
  }
}

module.exports = new CompanyService();
