require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const dogModelFn = require("./models/Dog");
const temperamentModelFn = require("./models/Temperament");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false, 
  }
);

dogModelFn(sequelize);
temperamentModelFn(sequelize);

const { Dog, Temperament } = sequelize.models;
Dog.belongsToMany(Temperament, { through: "DogTemperament" });
Temperament.belongsToMany(Dog, { through: "DogTemperament" });

module.exports = {
  ...sequelize.models, 
  conn: sequelize,
};
