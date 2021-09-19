const express = require("express");
const router = express.Router();
const {
	getAllContacts,
	getSingleContact,
	createNewContact,
	updateContact,
	deleteContact
} = require("../controllers/contactController");

router.route("/").get(getAllContacts).post(createNewContact);
router.route("/:id").get(getSingleContact).patch(updateContact).delete(deleteContact);

module.exports = router;
