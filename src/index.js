const server = require('./app');
const { conn } = require('./DB_connection');
const PORT = 3500;

// Sincronizamos sequelize antes de levantar el servidor 
conn.sync()
  .then(() => {
    console.log('Database connected successfully!');  
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(PORT, () => {
  console.log('Server runing in port: ' + PORT); 
});