"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("error_log_details", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      error_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "error_logs",
          key: "id",
        },
        allowNull: false,
      },
      error_priority: {
        type: Sequelize.ENUM,
        values: ["normal", "medium", "critical"],
        allowNull: false,
      },
      dev_notes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      admin_notes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      is_resloved: {
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable("error_log_details");
  },
};
