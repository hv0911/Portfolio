'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * 
     */

    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tech_stack: {
        allowNull: false,
        type: Sequelize.STRING
      },
      project_image_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      project_image_public_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      live_url: {
        allowNull: true,
        type: Sequelize.STRING
      },
      source_code:{
        allowNull: true,
        type: Sequelize.STRING
      }
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('projects')
  }
};
