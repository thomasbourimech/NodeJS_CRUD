'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usersModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usersModel.init({
    first_name: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    user_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usersModel',
  });
  return usersModel;
};