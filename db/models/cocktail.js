'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Method, User, Alcohol }) {
      this.belongsTo(Method, { foreignKey: 'method_id' }),
      this.belongsTo(User, { foreignKey: 'user_id' }),
      this.belongsToMany(Alcohol, { through: 'Cocktail_alcohols', foreignKey: 'alcohol_id' })
    }
  }
  Cocktail.init({
    name: DataTypes.STRING,
    method_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    info: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cocktail',
  });
  return Cocktail;
};



