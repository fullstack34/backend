const connection = require("../database/connection");
const { DataTypes } = require('sequelize');

const PostsTagsModel = connection.define('PostsTagsModel', {
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'posts'
      },
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'tags'
      },
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'posts_tags',
  timestamps: false,
  primaryKey: false
});

module.exports = PostsTagsModel;