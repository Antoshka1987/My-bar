'use strict';

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
    */
    await queryInterface.bulkInsert('Methods', [
      {
        name: 'Метод',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Build',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shake',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Blend',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Muddling',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flaming',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Layering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Throwling',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Methods', null, {});
  }
};
