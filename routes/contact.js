const express = require("express");
const router = express.Router();
const {
	getAllContacts,
	getSingleContact,
	createNewContact,
	updateContact
} = require("../controllers/contactController");

router.route("/").get(getAllContacts).post(createNewContact);
router.route("/:id").get(getSingleContact).patch(updateContact);

module.exports = router;
