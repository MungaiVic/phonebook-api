const express = require("express");
const router = express.Router();
const {
	getAllContacts,
	getSingleContact,
} = require("../controllers/contactController");

router.route("/").get(getAllContacts);
router.route("/:id").get(getSingleContact);

module.exports = router;
