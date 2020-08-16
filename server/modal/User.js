const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
	},
	email: String,
	password: String,
	role: {
		type: Number,
		default: 0,
	},
});

module.exports = mongoose.model('', Schema);
