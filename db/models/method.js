'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cocktail }) {
      this.hasMany(Cocktail, { foreignKey: 'method_id' })
    }
  }
  Method.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Method',
  });
  return Method;
};
