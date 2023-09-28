const { connect } = require("../config/db.config");

class UserRepository {
  db = {};

  constructor() {
    this.db = connect();
  }

  async paginated(query) {
    const limit = query.limit;
    const offset = query.offset;
    const order = query.order;
    const where = query.where;

    const users = await this.db.users.findAndCountAll({
      limit,
      offset,
      order,
      where,
    });

    return users;
  }

  async show(user_id) {
    const user = await this.db.users.findByPk(user_id);

    return user;
  }

  async create(user) {
    const newUser = await this.db.users.create(user);

    return newUser;
  }

  async update(user_id, userData) {
    const user = await this.db.users.findByPk(user_id);

    await user.update({
      ...userData,
    });

    return user;
  }

  async delete(user_id) {
    const user = await this.db.users.findByPk(user_id);

    await user.destroy();

    return true;
  }
}

module.exports = new UserRepository();
