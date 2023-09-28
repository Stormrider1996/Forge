module.exports = (sequelize, DataTypes, Model) => {
  class Company extends Model {
    static associate(models) {
      Company.hasMany(models.Department, {
        foreignKey: "company_id",
        onDelete: "CASCADE",
      });
    }
  }
  Company.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
      },
      handle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eu_vat_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      business_entity_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      organization_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      industry: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      short_description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      long_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      long_description_text: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      culture_clan: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      culture_adhocracy: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      culture_hierarchy: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      culture_market: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      plan_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      established_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      representative_first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      representative_last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      representative_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      representative_phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mission: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      vision: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      values: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      career_growth_path: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      person_in_charge: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      topics: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue: [],
      },
      hr_one_on_one: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      leaders_one_on_one: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      hr_session_frequency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hr_session_conductor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      leader_session_frequency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      leader_session_conductor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      employee_development: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      team_building_activities: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      team_building_frequency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      employee_training_programs: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      employee_learning_programs: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      learning_initiatives: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      learning_activity: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      continuous_learning: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      offering: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      expectation: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      benefits_and_perks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      flexible_work: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      remote_work: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      pet_friendly_office: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      work_life_balance: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      profile_picture: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      cover_picture: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      icon_picture: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      created_by: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deactivate_message: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      meta_title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      meta_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      meta_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "company",
      tableName: "companies",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Company;
};
