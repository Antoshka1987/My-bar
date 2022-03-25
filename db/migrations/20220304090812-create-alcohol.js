'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alcohol', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_of_alcohol_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Type_of_alcohols',
          key: 'id'
        }
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Companies',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING
      },
      strength: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Alcohol');
  }
};
