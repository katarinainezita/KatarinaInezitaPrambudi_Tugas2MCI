'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pembayarans', [
      {
        id_user: 1,
        id_booking: 1,
        jumlah_pembayaran: 100000,
        tanggal_pembayaran: new Date(),
        metode_pembayaran: 'Transfer Bank'
      },
      {
        id_user: 2,
        id_booking: 2,
        jumlah_pembayaran: 68000,
        tanggal_pembayaran: new Date(),
        metode_pembayaran: 'OVO'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Pembayarans', null, {});
     
  }
};
