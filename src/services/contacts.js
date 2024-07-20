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

const patchContact = async (contactId, payload, options = {}) => {
  const rawResult = await ContactsCollection.findByIdAndUpdate(
    contactId,
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
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
   patchContact,
};
