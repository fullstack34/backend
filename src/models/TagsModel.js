const connection = require("../database/connection");
const { DataTypes } = require('sequelize');

const TagsModel = connection.define('TagsModel', {
  name: DataTypes.STRING(50)
}, {
  tableName: 'tags',
  timestamps: false
});

module.exports = TagsModel;