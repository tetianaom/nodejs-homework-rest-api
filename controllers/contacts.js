const contacts = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const listContactsCtrl = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getContactByIdCtrl = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContactCtrl = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const removeContactCtrl = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

const updateContactCtrl = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  listContactsCtrl: ctrlWrapper(listContactsCtrl),
  getContactByIdCtrl: ctrlWrapper(getContactByIdCtrl),
  addContactCtrl: ctrlWrapper(addContactCtrl),
  removeContactCtrl: ctrlWrapper(removeContactCtrl),
  updateContactCtrl: ctrlWrapper(updateContactCtrl),
};
