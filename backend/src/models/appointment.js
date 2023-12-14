'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(
        models.Professional,
        {
          foreignKey: 'professionalId',
        },
      );
      this.belongsTo(
        models.Patient,
        {
          foreignKey: 'patientId',
        },
      );
    }
  }
  Appointment.init({
    patientId: DataTypes.INTEGER,
    professionalId: DataTypes.INTEGER,
    day: DataTypes.DATE,
    block: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};