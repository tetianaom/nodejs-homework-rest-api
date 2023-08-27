const {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../services/contactServices");
const { HttpError, ctrlWrapper } = require("../helpers");

const listContactsController = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await getListContacts(owner);
  res.json(result);
};

const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContactController = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await addContact(req.body, owner);
  res.status(201).json(result);
};

const removeContactController = async (req, res) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

const updateContactController = async (req, res) => {
  const { contactId } = req.params;
  const { name, email, phone, favorite } = req.body;

  const result = await updateContact(contactId, {
    name,
    email,
    phone,
    favorite,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateStatusContactController = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await updateContact(contactId, { favorite });
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
