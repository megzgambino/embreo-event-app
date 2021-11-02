'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.hasMany(models.Date, { foreignKey: 'EventId' })
      Event.belongsTo(models.User, { foreignKey: 'UserId' })
    }
  };
  Event.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    dates: DataTypes.ARRAY(DataTypes.STRING),
    location: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};