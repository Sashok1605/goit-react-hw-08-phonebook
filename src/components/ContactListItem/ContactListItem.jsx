import React from 'react';
import PropTypes from 'prop-types';
import { deleteContacts } from '../../redux/contacts/contacrsOperations';
import { useDispatch } from 'react-redux';
import s from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeletContact = id => dispatch(deleteContacts(id));
  return (
    <li className={s.contactListItem}>
      <p className={s.contact}>
        {' '}
        {name}: {number}
      </p>
      <button
        className={s.buttonDelete}
        type="button"
        onClick={() => onDeletContact(id)}
      >
        Delete
      </button>
    </li>
  );
  
} 
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
