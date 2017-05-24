module.exports.formulario_inclusao = function(app, req, res){
	res.render("admin/form_add_noticia.ejs", {validacao: {} , noticia:{}  });
}


module.exports.salvar_noticia = function(app, req, res){
		
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

		

		var noticiasModel = new app.app.models.noticiasModel(app);

		noticiasModel.salvarNoticia(noticia, function(err, result){
		
		res.redirect('/noticias');

	});
}