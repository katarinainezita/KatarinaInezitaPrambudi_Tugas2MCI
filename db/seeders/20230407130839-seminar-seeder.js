'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Seminars', [
    {
      judul_seminar: 'Seminar Digital Marketing',
      deskripsi_seminar: 'Seminar mengenai pemasaran digital',
      tanggal_seminar: new Date(),
      waktu_seminar: '10:30:00',
      tempat_seminar: 'Alun Alun Surabaya',
      harga_seminar: 100000
    },
    {
      judul_seminar: 'Seminar Bisnis',
      deskripsi_seminar: 'Seminar mengenai bisnis',
      tanggal_seminar: new Date(),
      waktu_seminar: '08:00:00',
      tempat_seminar: 'Tunjungan Plaza',
      harga_seminar: 68000
    }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Seminars', null, {});
     
  }
};
