'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Appointment, {
        foreignKey: 'professionalId',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.AvailableDate, {
        foreignKey: 'professionalId',
        onDelete: 'CASCADE',
      });
    }
  }
  Professional.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    specialty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professional',
  });
  return Professional;
};