'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn('experiences', 'experience_image_url', {
      allowNull: false,
      type: Sequelize.STRING,
    });

    await queryInterface.addColumn('experiences', 'experience_image_public_id', {
      allowNull: false,
      type: Sequelize.STRING,
    });


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('experiences', 'experience_image_url');
    
    await queryInterface.removeColumn('experiences', 'experience_image_public_id');

  }
};
