'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Admin',
        last_name: 'admin',
        email: 'admin@gmail.com',
        password: 'admin123',
        mobile_number: 1234567890,
        profile_photo: 'admin.jpg',
        status: 'approved',
        gender: 'male',
        company_id: 1,
        role_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
