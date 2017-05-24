module.exports = function(app){
	

	app.get("/fin", function(req, res){
		app.app.controller.admin.formulario_inclusao(app, req, res);
	});

	app.post('/noticias/salvar', function(req, res){
		app.app.controller.admin.salvar_noticia(app, req, res);
	});
}