

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        full_name: 'Admin User',
        email: 'admin@mailinator.com',
        password: '827ccb0eea8a706c4c34a16891f84e7b',
        type: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
