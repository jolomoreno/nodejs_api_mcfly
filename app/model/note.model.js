module.exports = (sequelize, Sequelize) => {
	const Note = sequelize.define('note', {
	  content: {
		type: Sequelize.STRING
	  },
	  favorite: {
		type: Sequelize.INTEGER
	  }
	});
	
	return Note;
}