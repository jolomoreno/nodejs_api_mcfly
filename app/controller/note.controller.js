const db = require('../config/db.config.js');
const Note = db.notes;

//Como USUARIO quiero poder llamar al API, es decir, 
//quiero poder tener un servidor local al que hacer una llamada HTTP y que me devuelva algo.
exports.indice = (req, res) => {
	res.send('Welcome to NodeJS API McFly develop by Jose Lorenzo Moreno Moreno.');		
}

// Como USUARIO quiero poder llamar al API para crear notas.
exports.create = (req, res) => {	
	Note.create({  
	  content: req.body.content,
	  favorite: 0
	}).then(note => {		
		res.send(note);
	});
};
 
// Como USUARIO quiero poder llamar al API para consultar las notas.
exports.findAll = (req, res) => {
	Note.findAll().then(notes => {
	  res.send(notes);
	});
};

// Como USUARIO quiero poder llamar al API para consultar una sóla nota.
exports.findById = (req, res) => {	
	Note.findById(req.params.noteId).then(note => {
		res.send(note);
	})
};

// Como USUARIO quiero poder llamar al API para consultar las notas marcadas como favoritas.
exports.findFavs = (req, res) => {	
	Note.findAll({
	  where: {
	    favorite: 1
	  }
	}).then(notes => {
		  res.send(notes);
		});
};
 
// Como USUARIO quiero poder llamar al API para marcar favorita una nota.
exports.update = (req, res) => {
	const id = req.params.noteId;
	Note.update({ 
		favorite: 1 }, 
		{ where: {id: req.params.noteId} }
	).then(() => {
		res.status(200).send("Updated successfully a note with id = " + id);
    });
};