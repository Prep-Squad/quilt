const Sequelize = require('sequelize');
const db = require('../db');

const Image = db.define('image', {
  imageUrl: {
    type: Sequelize.TEXT,
  },
  title: {
    type: Sequelize.TEXT
  }, 
  hasBeenUsed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});
module.exports = Image;
