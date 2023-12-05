require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST,DB_NAME,DB_DEPLOY } = process.env;
const UserModel = require('./models/auth/User');
 const sequelize = new Sequelize(
     
   // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   DB_DEPLOY,
   { logging: false, 
     native: false,
     alter: true,
     force:true,
     dialectOptions: {
        ssl:{
            require:true,
        },
     },
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