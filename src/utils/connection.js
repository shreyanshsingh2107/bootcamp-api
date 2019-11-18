const mongoose = require('mongoose');
const config = require('config');
const url = process.env.MONGODB_URI || config.get('mongoURI');
// const usersSchema = require('../models/user');
// const contactSchema = require('../models/contact');

let collection = {};

collection.connectDB = async () => {
	try {
		await mongoose.connect(url, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		//console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};
module.exports = collection