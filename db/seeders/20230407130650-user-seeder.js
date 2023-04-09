'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('Users', [
    {
      nama_user: 'Jacob Su',
      email_user: 'jacobsu@gmail.com',
      password_user: 'jacobsu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama_user: 'Lucy Su',
      email_user: 'lucysu@gmail.com',
      password_user: 'lucysu',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
