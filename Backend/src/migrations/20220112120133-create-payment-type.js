'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payment_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paymentType: {
        type: Sequelize.STRING,
        allowNull: false,
        field:'payment_type'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field:'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        field:'updated_at'
      },
      deletedAt: {
        type: Sequelize.DATE,
        field:'deleted_at'
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payment_types');
  }
};