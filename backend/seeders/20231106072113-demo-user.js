'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */

let salt  =  bcrypt.genSaltSync(10);
let hashPassword =   bcrypt.hashSync("012345678",salt);
console.log(hashPassword);
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */

    await queryInterface.bulkInsert('Users', [{
      full_name: 'Harsh Verma',
      email: 'hv091101@gmail.com',
      password: hashPassword,
      createdAt:new Date(),
      updatedAt:new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
