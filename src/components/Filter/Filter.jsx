import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/contactsAction';
import { getFilter } from '../../redux/contacts/contactsSelectors';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    return dispatch(filterContact(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        className={s.filter}
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
