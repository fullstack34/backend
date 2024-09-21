const connection = require('../database/connection');
const { DataTypes } = require("sequelize");

const columns = {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: {
        tableName: 'users'
      },
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  postcode: {
    type: DataTypes.STRING(8),
    allowNull: false
  },
  street: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  number: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  complement: DataTypes.STRING(255),
  region: DataTypes.STRING(50),
  province: DataTypes.STRING(50)
};

const config = {
  tableName: 'user_address'
};

const UserAddresModel = connection.define(
  'UserAdressModel', 
  columns,
  config
);

module.exports = UserAddresModel;