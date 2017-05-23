
function NoticiasDAO (conection){

	this._conection = conection;
}

	NoticiasDAO.prototype.getNoticias = function(callback) {
		this._conection.query('select * from noticias', callback);
	};

	NoticiasDAO.prototype.getNoticia = function( callback){

		this._conection.query('select * from noticias where id_noticia=2', callback);
	}

	NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){

		this._conection.query('insert into noticias set ?', noticia, callback);
	}

module.exports = function(){
	return NoticiasDAO;
}