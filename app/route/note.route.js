
module.exports = function(app) {
 
    const notes = require('../controller/note.controller.js');
    
    // Como USUARIO quiero poder llamar al API, es decir, 
    //quiero poder tener un servidor local al que hacer una llamada HTTP y que me devuelva algo.
    app.get('/apimcfly', notes.indice);

    // Como USUARIO quiero poder llamar al API para crear notas.
    app.post('/apimcfly/notes', notes.create);
 
    // Como USUARIO quiero poder llamar al API para consultar las notas.
    app.get('/apimcfly/notes', notes.findAll);
 
    // Como USUARIO quiero poder llamar al API para consultar una sola nota.
    app.get('/apimcfly/notes/:noteId', notes.findById);

    // Como USUARIO quiero poder llamar al API para consultar las notas marcadas como favoritas.
    app.get('/apimcfly/notes-favs', notes.findFavs);
 
    // Como USUARIO quiero poder llamar al API para marcar favorita una nota.
    app.put('/apimcfly/notes/:noteId', notes.update);
}