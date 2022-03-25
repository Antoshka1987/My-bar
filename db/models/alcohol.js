'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alcohol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Type_of_alcohol, Cocktail, Company }) {
      this.belongsTo(Type_of_alcohol, { foreignKey: 'type_of_alcohol_id' }),
        this.belongsToMany(Cocktail, { through: 'Cocktail_alcohols', foreignKey: 'cocktail_id' }),
        this.belongsTo(Company, { foreignKey: 'company_id' })
    }
  }
  Alcohol.init({
    type_of_alcohol_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    strength: DataTypes.STRING,
    info: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alcohol',
  });
  return Alcohol;
};
