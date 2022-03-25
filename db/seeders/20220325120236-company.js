'use strict';
const fs = require('fs');
const { parse } = require('../../index');
const data = parse();
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Companies', data.map(elem => ({ name: elem, createdAt: new Date(), updatedAt: new Date() })), {});
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
