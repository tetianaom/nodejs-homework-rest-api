const Contact = require("../db/models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const listContactsController = async (req, res) => {
  const result = await Contact.find({});
  res.json(result);
};

const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContactController = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const removeContactController = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

const updateContactController = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateStatusContactController = async (req, res) => {
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
  listContactsController: ctrlWrapper(listContactsController),
  getContactByIdController: ctrlWrapper(getContactByIdController),
  addContactController: ctrlWrapper(addContactController),
  removeContactController: ctrlWrapper(removeContactController),
  updateContactController: ctrlWrapper(updateContactController),
  updateStatusContactController: ctrlWrapper(updateStatusContactController),
};
