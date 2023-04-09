'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seminar extends Model {
    
    static associate(models) {
      Seminar.hasMany(models.Booking, {
        foreignKey: 'id_seminar'
      });
      Seminar.hasMany(models.TempatDuduk, {
        foreignKey: 'id_seminar'
      });
    }
  }
  Seminar.init({
    judul_seminar: DataTypes.STRING,
    deskripsi_seminar: DataTypes.TEXT,
    tanggal_seminar: DataTypes.DATE,
    waktu_seminar: DataTypes.TIME,
    tempat_seminar: DataTypes.STRING,
    harga_seminar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Seminar',
  });
  return Seminar;
};