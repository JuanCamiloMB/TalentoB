import { Sequelize, DataTypes } from "sequelize";

import { mysqlSchema, mysqlUsername, mysqlPassword, mysqlHost } from "./config";

export const sequelize = new Sequelize(
  mysqlSchema,
  mysqlUsername,
  mysqlPassword,
  {
    host: mysqlHost,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export const User = sequelize.define(
  "users",
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "users",
  }
);
