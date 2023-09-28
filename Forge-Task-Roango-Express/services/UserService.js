const UserRepository = require("../repositories/UserRepository");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {}

  validateQuery(query) {
    let { page, limit, sort, order, filter } = query;

    page = parseInt(page) || "1";
    limit = parseInt(limit) || "10";
    sort = String(sort);
    order = String(order);
    filter = Object(filter);

    const validSortColumns = [
      "id",
      "email",
      "first_name",
      "last_name",
      "created_at",
      "updated_at",
    ];

    const validOrderValues = ["ASC", "DESC"];

    const validFilterKeys = ["first_name", "last_name"];

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

    const { rows: users, count } = await UserRepository.paginated(options);

    const totalPages = Math.ceil(count / limit);

    return this.formatResponse(query, {
      users,
      count,
      totalPages,
      page,
      limit,
    });
  }

  async show(user_id) {
    return await UserRepository.show(user_id);
  }

  async create(user) {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;

    return await UserRepository.create(user);
  }

  async update(user_id, user) {
    return await UserRepository.update(user_id, user);
  }

  async delete(user_id) {
    return await UserRepository.delete(user_id);
  }
}

module.exports = new UserService();
