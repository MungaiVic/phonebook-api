const Contact = require("../models/contact");

const getAllContacts = async (req, res) => {
	try {
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

const createNewContact = async (req, res) => {
	//TODO: Add validation to ensure no empty field values. Ensure graceful handling of form errors.
	const contact = await Contact.create(req.body, { runValidators: true });
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

const deleteContact = async (req, res, next) => {
	const { id: contactID } = req.params;
	const contact = await Contact.findByIdAndDelete({ _id: contactID });
	if (!contact) {
		return next(`No contact with id: ${contactID}`);
	}
	res.status(200).json({ contact });
};

module.exports = {
	getAllContacts,
	getSingleContact,
	createNewContact,
	updateContact,
	deleteContact,
};
