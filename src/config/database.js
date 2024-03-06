// get the client
const mysql = require("mysql2");

// create the connection,
const connection = mysql.createConnection({
  host: "localhost",
  user: "anjana",
  password: "Admin1234#",
  database: "online_shop",
});

module.exports = connection.promise();
