'use strict';
const {
  Model
} = require('sequelize');
const { passwordHasher } = require('../helpers');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Event, { foreignKey: 'UserId' })
    }
  };
  User.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['HR', 'Vendor']],
        notEmpty: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6,50],
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instances, options) => {
    instances.password = passwordHasher(instances.password)
  })

  return User;
};