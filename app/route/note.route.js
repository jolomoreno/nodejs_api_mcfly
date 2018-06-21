
module.exports = function(app) {
 
    const notes = require('../controller/note.controller.js');
    
    //Comprobacion token. 
    //token==1234567890987654321 --> Entra
    //token!=1234567890987654321 --> No Entra
    //TODO: Hacer un checkToken que pida el user y pass y busque en BBDD su token asociado
    //ALTERNATIVE: Usar Json Web Token
    var checkToken = function (req, res, next) 
    {
        if(req.get('token')!='1234567890987654321')
        {
            res.send('ERROR: Incorrect token-> '+ req.get('token'));
        }            
        next();
    };

    app.use(checkToken);

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