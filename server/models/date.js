'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Date.belongsTo(models.Event, { foreignKey: 'EventId' })
    }
  };
  Date.init({
    EventId: DataTypes.INTEGER,
    dates: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Date',
  });
  return Date;
};