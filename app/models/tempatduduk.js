'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TempatDuduk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TempatDuduk.belongsTo(models.Seminar, {
        foreignKey: 'id_seminar'
      });
    }
  }
  TempatDuduk.init({
    id_seminar: DataTypes.INTEGER,
    nomor_tempatduduk: DataTypes.INTEGER,
    status_tempatduduk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TempatDuduk',
  });
  return TempatDuduk;
};