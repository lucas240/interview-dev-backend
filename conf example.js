const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  '', // address of the server
user :  '', // username
password :  '!',
database :  '',
});
module.exports = connection;