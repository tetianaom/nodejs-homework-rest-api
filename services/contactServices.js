const Contact = require("../db/models/contact");

const getListContacts = async () => {
  const contacts = await Contact.find({});

  return contacts;
};

const getContactById = async (id) => {
  const contact = await Contact.findById(id);

  return contact;
};

const addContact = async (data) => {
  const contact = await Contact.create(data);

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
