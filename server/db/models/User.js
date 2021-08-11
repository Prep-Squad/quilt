const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  firebaseId: {
    type: Sequelize.STRING,
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
