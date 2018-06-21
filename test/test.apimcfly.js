let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';

//Prueba consultar las notas.
describe('Get all notes: ',()=>{
  it('Should get all notes', (done) => {
    chai.request(url)
      .get('/apimcfly/notes')
      .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
});

//Prueba consultar una sola nota (id=1).
describe('Get the note with id 1: ',()=>{

	it('Should get the note with id 1', (done) => {
		chai.request(url)
			.get('/apimcfly/notes/1')
			.end( function(err,res){
				console.log(res.body)
				expect(res.body).to.have.property('id').to.be.equal(1);
				expect(res).to.have.status(200);
				done();
			});
	});

});

//Prueba consultar las notas favoritas.
describe('Get all notes: ',()=>{
  it('Should get all favorite notes', (done) => {
    chai.request(url)
      .get('/apimcfly/notes-favs')
      .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
});

//Prueba inserción de las notas.
describe('Insert a note: ',()=>{
	it('Should insert a note', (done) => {
		chai.request(url)
			.post('/apimcfly/notes')
			.send({content: "Esto es una prueba desde Mocha-Chai"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});
});

//Prueba marcar una nota como favorita
describe('Update the field favorite=1 of note with id 1: ',()=>{
	it('Should update the filed favorite=1 of notes', (done) => {
		chai.request(url)
			.put('/apimcfly/notes/1')
			.end( function(err,res){
				console.log(res.body)
				expect(res.body).to.have.property('notes').to.be.equal(20);
				expect(res).to.have.status(200);
				done();
			});
	});

});