import { createAction } from '@reduxjs/toolkit';


export const fetchContactsRequest = createAction('/contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('/contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('/contacts/fetchContactsError');

export const addContactRequest = createAction('/contacts/addContactRequest');
export const addContactSuccess = createAction('/contacts/addContactSuccess');
export const addContactError = createAction('/contacts/addContactError');

export const deleteContactsRequest = createAction('/contacts/deleteContactsRequest');
export const deleteContactsSuccess = createAction('/contacts/deleteContactsSuccess');
export const deleteContactsError = createAction('/contacts/deleteContactsError');

export const filterContact = createAction('filter/contact');



// export const addContact = createAction(ADD);

// export const deleteContacts = createAction(DEL);

// export const filterContact = createAction(FILTER);

// export const allContacts = createAction(ALL);

// export const addContact = ({ name, number }) => ({
//   type: 'add/contact',
//   payload: {
//     id: v4(),
//     name,
//     number,
//   },
// });

// export const deleteContacts = contactId => ({
//   type: 'delete/contact',
//   payload: contactId,
// });

// export const filterContact = value => ({
//   type: 'filter/contact',
//   payload: value,
// });

// export const allContacts = contacts => ({
//   type: 'all/contact',
//   payload: contacts,
// });
