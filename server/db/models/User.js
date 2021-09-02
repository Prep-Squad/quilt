const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  firebaseId: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isUnique: true,
      isEmail: true
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
