module.exports = (sequelize, DataTypes, Model) => {
  class DepartmentDbView extends Model {}
  DepartmentDbView.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      company_id: {
        type: DataTypes.STRING(36),
      },
      path: {
        type: DataTypes.TEXT,
      },
      created_by: {
        type: DataTypes.STRING(36),
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      parent_id: {
        type: DataTypes.STRING(36),
      },
      archived_at: {
        type: DataTypes.DATE,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "departmentDbView",
      tableName: "view_company_departments",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return DepartmentDbView;
};
