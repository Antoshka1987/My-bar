'use strict';
const {
  Model
} = require('sequelize');
const f = require('session-file-store');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Country, Cocktail }) {
      this.belongsTo(Country, { foreignKey: 'country_id' }),
        this.hasMany(Cocktail, { foreignKey: 'user_id' })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
