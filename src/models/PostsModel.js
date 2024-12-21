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
  slug: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  content: DataTypes.TEXT,
  image: {
    type: DataTypes.STRING(255),
    get() {
      return `http://localhost:3000/public/images/${this.getDataValue('image')}`;
    }
  },
  date: {
    type: DataTypes.VIRTUAL,
    get() {
      const createdAt = new Date(this.getDataValue('createdAt'));
      return createdAt.toLocaleDateString('pt-BR');
    }
  }  
}, {
  tableName: 'posts'
});

module.exports = PostsModel;