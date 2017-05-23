module.exports = function(app){
	app.get("/noticia", function(req, res){
			

		var connection = app.config.coneccoes();

		var noticiasModel = new app.app.models.noticiasModel(connection);

		noticiasModel.getNoticia( function(error, result){

			res.render("noticias/noticia.ejs", {noticia : result});

		});
	});
}	
