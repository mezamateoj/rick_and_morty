require('dotenv').config();
const { Sequelize } = require('sequelize');
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { UserModel } = require('../src/models/User')
const { FavoriteModel } = require('../src/models/Favorite')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
    // URL
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/rickandmorty`,
    { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UserModel(sequelize);
FavoriteModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// const { User, Favorite } = sequelize.models;

User.belongsToMany(this.Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(this.User, { through: 'user_favorite' });

module.exports = {
    User,
    Favorite,
    conn: sequelize,
};
