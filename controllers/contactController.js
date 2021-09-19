const data = require("../data");
const Contact = require("../models/contact");

const getAllContacts = async (req, res) => {
	try {
		// contacts = data;
		const contacts = await Contact.find({});
		res.status(200).json({ success: true, contacts });
	} catch (error) {
		console.log(error);
	}
};

const getSingleContact = async (req, res, next) => {
	const { id: contactID } = req.params; // The `id` should match what's in your routes ':id'
	try {
		const contact = await Contact.findOne({ _id: contactID });
		res.status(200).json({ success: true, contact });
	} catch (error) {
		console.log(error);
	}
	next();
};

const createNewContact = async (req, res, next) => {
	const contact = await Contact.create(req.body);
	res.status(201).json({ success: true, contact });
};

const updateContact = async (req, res, next) => {
	const { id: contactID } = req.params;
	const contact = await Contact.findByIdAndUpdate(
		{ _id: contactID },
		req.body,
		{
			new: true,
			runValidators: true,
		}
	);

	if (!contact) {
		return next(`No contact with id: ${contactID}`, 404);
	}
	res.status(200).json({ id: contact.id, success: true, data: req.body });
};

module.exports = { getAllContacts, getSingleContact, createNewContact, updateContact };
