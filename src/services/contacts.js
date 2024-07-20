import ContactsCollection from '../db/models/contact.js';

function getAllContacts () {
  return ContactsCollection.find();
};

function getContactById(contactId)  {
  return ContactsCollection.findById(contactId);

};


function createContact  (contact)  {
 return ContactsCollection.create(contact);
};

function deleteContact(contactId) {
  return ContactsCollection.findByIdAndDelete(contactId);
};

 function patchContact = async (contactId, payload ) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};



export {
  getAllContacts,
  getContactById,
  createContact,
  deleteContact,
  // patchContact,
};
