'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      amount: {
        type: Sequelize.STRING,
        allowNull: false,
        field:'amount'
      },
      paymentTypeId: {
        type: Sequelize.INTEGER,
        field: 'payment_type_id',
        references: {
          model: 'payment_types', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      isRefunded: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field:'is_refunded'
      },
      paymentRefundId: {
        type: DataTypes.STRING,
        field:'payment_refund_id'
      },
      paymentId: {
        type: Sequelize.STRING,
        field:'payment_id'
      },
      paymentStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: 'payment_status'
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
    await queryInterface.dropTable('payments');
  }
};