const { sequelize } = require('./models');

async function connect() {
	try {
		await sequelize.authenticate();
	} catch (e) {
		console.log('Could not connect to database.');
		console.log(e);
		return;
	}

	console.log('Successfully connected to database.');

  /* 
  ===========================================
  Your future testing of models will go here
  ===========================================
  */

	await sequelize.close();
}

connect();
