'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.renameColumn('experiences', 'campany', 'company');

    await queryInterface.addColumn('experiences', 'start_date', {
      allowNull: false,
      type: Sequelize.STRING,
    });

    await queryInterface.addColumn('experiences', 'end_date', {
      allowNull: false,
      type: Sequelize.STRING,
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
