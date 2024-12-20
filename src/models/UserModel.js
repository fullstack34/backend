const connection = require("../database/connection");
const { DataTypes } = require("sequelize");

let UserModel = connection.define(
  "UserModel",
  {
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fullname: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.getDataValue("firstname")} ${this.getDataValue(
          "surname"
        )}`;
      },
    },
    image: {
      type: DataTypes.STRING(255),
      get() {
        return `http://localhost:3000/public/images/${this.getDataValue(
          "image"
        )}`;
      },
    },
  },
  {
    tableName: "users",
  }
);

module.exports = UserModel;
