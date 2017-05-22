module.exports = function(app){
	

	app.get("/formulario_inclusao_noticia", function(req, res){
		res.render("admin/form_add_noticia.ejs");
	});

	app.post('/noticias/salvar', function(req, res){
		var noticia = req.body;
		var connection = app.config.coneccoes();

		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.salvarNoticia(noticia, connection, function(err, result){
		res.redirect('/noticias')
		});
	});
}