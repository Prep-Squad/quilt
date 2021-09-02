const db = require('./db');
const Like = require('./models/Like');
const User = require('./models/User');
const Image = require('./models/Image');
const Post = require('./models/Post');
//associations could go here!
// Meme.belongsTo(User)
// User.hasMany(Meme)

User.belongsToMany(User, { through: 'followers', as: 'follower' });
Like.belongsTo(Post);
Post.hasMany(Like);
Like.belongsTo(User);
User.hasMany(Like);
Post.belongsTo(Image);
Image.hasMany(Post);
Post.belongsTo(User);
User.hasMany(Post);

module.exports = { 
    db,
    Like,
    User,
    Image,
    Post,
  }

