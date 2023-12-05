require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST,DB_NAME } = process.env;
const UserModel = require('./models/auth/User');
 const sequelize = new Sequelize(
    //'postgres://postgres:1234@localhost:5432/rickandmorty',
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, 
     native: false,
     alter: true,
     force:true
   }
);

 
 
 UserModel(sequelize);
//

//

 
// ¡Relaciona tus modelos aquí abajo!
// const { User, Favorite } = sequelize.models;
// User.belongsToMany(Favorite, {through:'user_favorite'});
// Favorite.belongsToMany(User, {through:'user_favorite'});

module.exports = {
   // User,
  // Favorite,
   conn: sequelize,
};