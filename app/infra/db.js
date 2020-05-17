const database = require('../config/database-config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(database.database, database.username, database.password, {
  host: database.host, 
  dialect: database.dialect
});
  
sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar-se à base de dados:', err);
  })
  .done();
  
