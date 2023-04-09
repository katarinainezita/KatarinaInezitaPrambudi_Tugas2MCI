'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seminars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul_seminar: {
        type: Sequelize.STRING
      },
      deskripsi_seminar: {
        type: Sequelize.TEXT
      },
      tanggal_seminar: {
        type: Sequelize.DATE
      },
      waktu_seminar: {
        type: Sequelize.TIME
      },
      tempat_seminar: {
        type: Sequelize.STRING
      },
      harga_seminar: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seminars');
  }
};