const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize', 'root', 'MYSQL##rajkumar@1234', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;