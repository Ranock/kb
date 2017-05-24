module.exports.index = function(app, req, res){
	var noticiasModel = new app.app.models.noticiasModel(app);
	noticiasModel.get5UltimasNoticias(function(error, result){
		res.render("home/index.ejs", {noticia : result});
	})
	
}