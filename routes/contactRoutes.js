import express from "express";
const router = express.Router();
import { getContacts, createContact, getContact, updateContact, delContact } from "../controllers/contactControllers.js";

router.route("/").get(getContacts).post(createContact);


router.route("/:id").get(getContact).put(updateContact).delete(delContact);
export default router;