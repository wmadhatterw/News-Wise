module.exports = function(sequelize, Sequelize) {

	var Article = sequelize.define('Article', {

		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		popular: {
			type: Sequelize.INTEGER
		},
		title: {
			type: Sequelize.STRING
		},
		url: {
			type: Sequelize.TEXT
		},
		author: {
			type: Sequelize.STRING
		},
		site: {
			type: Sequelize.STRING
		},
		text: {
			type: Sequelize.TEXT
		},
		createdAt: {
			type: Sequelize.DATE
		},
		updatedAt: {
			type: Sequelize.DATE
		}
	});

	return Article;

}
