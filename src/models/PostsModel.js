const connection = require("../database/connection");
const { DataTypes } = require('sequelize');

const PostsModel = connection.define('PostsModel', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'users'
      },
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  content: DataTypes.TEXT,
  image: DataTypes.STRING(255)
}, {
  tableName: 'posts'
});

module.exports = PostsModel;