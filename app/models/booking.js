'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, {
        foreignKey: 'id_user'
      });
      Booking.belongsTo(models.Seminar, {
        foreignKey: 'id_seminar'
      });
      Booking.hasOne(models.Pembayaran, {
        foreignKey: 'id_booking'
      })
    }
  }
  Booking.init({
    id_user: DataTypes.INTEGER,
    id_seminar: DataTypes.INTEGER,
    tanggal_booking: DataTypes.DATE,
    status_booking: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};