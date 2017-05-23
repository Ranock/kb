module.exports = function(app){
	

	app.get("/fin", function(req, res){
		res.render("admin/form_add_noticia.ejs", {validacao: {} , noticia:{}  });
	});

	app.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		req.assert('titulo', 'titulo é obrigatorio').notEmpty();
		req.assert('resumo', 'resumo é obrigatorio').notEmpty();
		req.assert('resumo', 'o resumo deve conter entre 10 a 100 letras').len(10, 100);
		req.assert('nome_autor', 'nome do autor é obrigatorio').notEmpty();
		req.assert('data_noticia', 'data é obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});;
		req.assert('noticia', 'noticia é obrigatorio').notEmpty();

		var erros = req.validationErrors();
		if(erros){
			console.log(erros);
			res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
			return;
		}

		var connection = app.config.coneccoes();

		var noticiasModel = new app.app.models.noticiasModel(connection);

		noticiasModel.salvarNoticia(noticia, function(err, result){
			console.log(err);
		res.redirect('/noticias')
		});
	});
}