'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Country, Alcohol }) {
      this.belongsTo(Country, { foreignKey: 'country_id' }),
        this.hasMany(Alcohol, { foreignKey: 'company_id' })
    }
  }
  Company.init({
    title: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
