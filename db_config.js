const mysql = require("mysql");
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'receipeapp'
  });

  module.exports = connection;