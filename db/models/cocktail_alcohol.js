'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cocktail_alcohol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cocktail_alcohol.init({
    cocktail_id: DataTypes.INTEGER,
    alcohol_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cocktail_alcohol',
  });
  return Cocktail_alcohol;
};