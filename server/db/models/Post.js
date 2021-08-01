const Sequelize = require('sequelize');
const db = require('../db');

const Post = db.define('post', {
  currentMood: {
    type: Sequelize.ENUM([
      'happy',
      'excited',
      'scared',
      'silly',
      'sad',
      'lonely',
      'angry',
      'other',
    ]),
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});
module.exports = Post;
