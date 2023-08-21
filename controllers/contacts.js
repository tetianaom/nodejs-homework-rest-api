const Contact = require("../db/models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const listContactsCtrl = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getContactByIdCtrl = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContactCtrl = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const removeContactCtrl = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

const updateContactCtrl = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateStatusContactCtrl = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
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
  updateStatusContactCtrl: ctrlWrapper(updateStatusContactCtrl),
};
