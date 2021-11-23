import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';

import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contactsSelectors';

const ContactList = () =>{
  const contacts = useSelector(getVisibleContacts)
 return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
         
        />
      ))}
    </ul>
  );
} 



export default ContactList;



