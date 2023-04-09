'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pembayaran.belongsTo(models.User, {
        foreignKey: 'id_user'
      });
      Pembayaran.belongsTo(models.Booking, {
        foreignKey: 'id_booking'
      })
    }
  }
  Pembayaran.init({
    id_user: DataTypes.INTEGER,
    id_booking: DataTypes.INTEGER,
    jumlah_pembayaran: DataTypes.INTEGER,
    tanggal_pembayaran: DataTypes.DATE,
    metode_pembayaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pembayaran',
  });
  return Pembayaran;
};