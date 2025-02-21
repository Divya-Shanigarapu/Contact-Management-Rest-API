import asyncHandler from "express-async-handler";
import  Contact from "../schema/contactModel.js";
import express from "express";
const app=express();
app.use(express.json());

const getContacts = asyncHandler(async (req, res) => {
    const contacts=await Contact.find();
    res.status(200).json(contacts);
});
const createContact = asyncHandler(async(req, res) => {
    const {name ,mail,phone}=req.body;
    if(!name || !mail || !phone)
    {
        throw new Error("All fields are mandatory");
    }
    const contact=await Contact.create({
        name,
        mail,
        phone});
    res.status(201).json(contact);
});
const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `get contact with user id ${req.params.id}` });
});
const updateContact = asyncHandler(async (req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(400);
    }
    const updatedContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatedContact);
});
const delContact = asyncHandler(async (req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(400);
    }
    await Contact.remove();
    res.status(201).json(contact);
});
export { getContacts,createContact,getContact,updateContact,delContact};