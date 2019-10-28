var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'akshay'
});

connection.connect(function(err){
    if(!err) {
        console.log("[Server] Database is connected");
    } else {
        console.log("[Server] Error while connecting with database");
   }
});

module.exports = connection;
