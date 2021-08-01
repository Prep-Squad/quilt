const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      isUnique: true,
    },
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    validate: {
      isUnique: true,
    },
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
