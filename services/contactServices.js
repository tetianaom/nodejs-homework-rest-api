const Contact = require("../db/models/contact");

const getListContacts = async (owner) => {
  const contacts = await Contact.find({ owner });

  return contacts;
};

const getContactById = async (id) => {
  const contact = await Contact.findById(id);

  return contact;
};

const addContact = async (data, owner) => {
  const contact = await Contact.create({ ...data, owner });

  return contact;
};

const removeContact = async (id) => {
  const contact = await Contact.findByIdAndRemove(id);

  return contact;
};

const updateContact = async (id, data) => {
  const contact = await Contact.findByIdAndUpdate(id, data, {
    new: true,
  });

  return contact;
};

module.exports = {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
