module.exports.noticia = function(app, req, res){
		// var connection = app.config.coneccoes();

		var noticiasModel = new app.app.models.noticiasModel(app);

		noticiasModel.getNoticia( function(error, result){

			res.render("noticias/noticia.ejs", {noticia : result});

		});
}

module.exports.noticias = function(app, req, res){

		// var connection = app.config.coneccoes();
		var noticiasModel = new app.app.models.noticiasModel(app);

		noticiasModel.getNoticias( function(err, result){
			res.render("noticias/noticias.ejs", {noticias : result});			
		});
}



