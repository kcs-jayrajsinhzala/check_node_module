"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("projects", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      project_type: {
        type: Sequelize.ENUM,
        values: ["FC", "ODC", "PRODUCT", "MAINTENANCE", "SAP", "PROJECTS"],
        allowNull: false,
      },
      estimated_hours: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      completed_hours: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      plan_delivery_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      actual_delivery_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      close_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      project_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      status: {
        type: Sequelize.ENUM,
        values: ["pending", "approved", "denied"],
        allowNull: false,
        defaultValue: "pending",
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_by: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_by: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("projects");
  },
};
