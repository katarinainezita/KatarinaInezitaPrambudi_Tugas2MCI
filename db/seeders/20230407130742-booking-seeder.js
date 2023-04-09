'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings', [
      {
        id_user: 1,
        id_seminar: 1,
        tanggal_booking: new Date(),
        status_booking: 'confirmed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_user: 2,
        id_seminar: 2,
        tanggal_booking: new Date(),
        status_booking: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Bookings', null, {});
     
  }
};
