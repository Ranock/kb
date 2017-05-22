module.exports = function(){
	
	this.getNoticias = function(conection, callback){

		conection.query('select * from noticias', callback);

	}
	this.getNoticia = function(conection, callback){

		conection.query('select * from noticias where id_noticia=2', callback);

	}

	this.salvarNoticia = function(noticia, conection, callback){

		conection.query('insert into noticias set ?', noticia, callback);
	}
	return this;
}