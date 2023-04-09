'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TempatDuduks', [
      {
        id_seminar: 1,
        nomor_tempatduduk: 1,
        status_tempatduduk: 'available',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_seminar: 1,
        nomor_tempatduduk: 2,
        status_tempatduduk: 'available',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_seminar: 2,
        nomor_tempatduduk: 1,
        status_tempatduduk: 'available',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_seminar: 2,
        nomor_tempatduduk: 2,
        status_tempatduduk: 'booked',
        createdAt: new Date(),
        updatedAt: new Date()
      }
        
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('TempatDuduks', null, {});
     
  }
};
