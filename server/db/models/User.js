const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  firebaseId: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
    allowNull: false,
  },
  bio: {
    type: Sequelize.TEXT,
  },
  location: {
    type: Sequelize.STRING,
  },
});
module.exports = User;
