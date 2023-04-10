'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      {
        company_name: 'teco limted',
        contact_number: '9998887776',
        company_address: '12 ABC near XYZ street',
      },
      {
        company_name: 'esco limted',
        contact_number: '9998887776',
        company_address: '48 ABC opposite XYZ street',
      },
      {
        company_name: 'jico limted',
        contact_number: '9998887776',
        company_address: '50 ABC near XYZ street',
      },
      {
        company_name: 'echo limted',
        contact_number: '9998887776',
        company_address: '80 ABC near XYZ street',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  },
};
