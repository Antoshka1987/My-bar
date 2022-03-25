'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cocktail_alcohols', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cocktail_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cocktails',
          key: 'id'
        }
      },
      alcohol_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Alcohol',
          key: 'id'
        }
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
    await queryInterface.dropTable('Cocktail_alcohols');
  }
};
