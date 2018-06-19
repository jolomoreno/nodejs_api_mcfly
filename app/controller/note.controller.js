const db = require('../config/db.config.js');
const Note = db.notes;


exports.indice = (req, res) => {
	res.send('Esto es el index');
};

// Post a Note
exports.create = (req, res) => {	
	// Save to MySQL database
	Note.create({  
	  content: req.body.content,
	  favorite: req.body.favorite
	}).then(note => {		
		// Send created note to client
		res.send(note);
	});
};
 
// FETCH all Notes
exports.findAll = (req, res) => {
	Note.findAll().then(notes => {
	  // Send all notes to Client
	  res.send(notes);
	});
};

// Find a Note by Id
exports.findById = (req, res) => {	
	Note.findById(req.params.noteId).then(note => {
		res.send(note);
	})
};

exports.findFavs = (req, res) => {	
	Note.findAll({
	  where: {
	    favorite: 1
	  }
	}).then(notes => {
		  res.send(notes);
		});
};
 
// Update a Note
exports.update = (req, res) => {
	const id = req.params.noteId;
	Note.update( { content: req.body.content, favorite: req.body.favorite }, 
					 { where: {id: req.params.noteId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a note with id = " + id);
				   });
};