'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Booking, {
        foreignKey: 'id_user'
      });
      User.hasMany(models.Pembayaran, {
        foreignKey: 'id_user'
      })
    }
  }
  User.init({
    nama_user: DataTypes.STRING,
    email_user: DataTypes.STRING,
    password_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};