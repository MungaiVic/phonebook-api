const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
	prefix: { type: String },
	first_name: {
		type: String,
		trim: true,
		maxlength: [20, "First name cannot be more than 20 characters"],
	},
	last_name: {
		type: String,
		trim: true,
		maxlength: [20, "First name cannot be more than 20 characters"],
	},
	phoneNumber: { type: Number, required: true },
	email: { type: String },
	alias: { type: String },
});

module.exports = mongoose.model("Contact", ContactSchema);
