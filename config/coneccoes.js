var mysql = require('mysql');

var dbcon = function(){

	return	mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '123456',
			database: 'teste',
		});
}

module.exports = function(){
	console.log("dbcon carregado")
	return dbcon;
}