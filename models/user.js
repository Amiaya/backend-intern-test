'use strict';

const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: async (user, options) => {
        user.password = await hashpassword(user.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};

async function hashpassword(pass) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(pass, saltRounds)

  return hash
}