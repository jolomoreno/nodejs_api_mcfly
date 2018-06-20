
module.exports = function(app) {
 
    const notes = require('../controller/note.controller.js');
    
    app.get('/apimcfly', notes.indice);

    // Create a new Notes
    app.post('/apimcfly/notes', notes.create);
 
    // Retrieve all Notes
    app.get('/apimcfly/notes', notes.findAll);
 
    // Retrieve a single Note by Id
    app.get('/apimcfly/notes/:noteId', notes.findById);

    // Retrieve all favorites Notes
    app.get('/apimcfly/notes-favs', notes.findFavs);
 
    // Update a Note with Id
    app.put('/apimcfly/notes/:noteId', notes.update);
}