

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    fullName: {
      type: Sequelize.STRING,
      allowNull: false,
      field:'full_name'
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      field:'email'
    },
    password: {
      type: Sequelize.STRING,
      field:'password'
    },
    cardId: {
      type: Sequelize.STRING,
      field:'card_id'
    },
    type: {
      type: Sequelize.ENUM,
      values: ['user', 'admin'],
      defaultValue: 'user',
      field:'type'
    },
    customerId: {
      type: Sequelize.STRING,
      field:'customer_id'
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
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
