

module.exports = function(app){
	app.get("/noticias", function(req, res){
			

		var connection = app.config.coneccoes();
		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(err, result){
			res.render("noticias/noticias.ejs", {noticias : result});
			
		});
				
	});

}
