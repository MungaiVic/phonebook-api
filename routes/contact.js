const express = require("express");
const router = express.Router();
const {
	getAllContacts,
	getSingleContact,
	createNewContact,
} = require("../controllers/contactController");

router.route("/").get(getAllContacts).post(createNewContact);
router.route("/:id").get(getSingleContact);

module.exports = router;
