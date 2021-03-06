const { sequelize, DataTypes } = require('../lib/sequelizedb');

const User = sequelize.define("user", {
  _id: {
    type: DataTypes.INTEGER,
    field: "_id",
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  categories: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  emailSettings: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  profilSettings: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  verifiedEmail: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  lastActive: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = {
  User
};
