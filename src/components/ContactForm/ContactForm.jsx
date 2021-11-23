import { useState } from 'react';
import { addContact } from '../../redux/contacts/contacrsOperations';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import { Button, Form } from 'react-bootstrap';

const ContactForm = () => {
  const distatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        return;

      case 'number':
        setNumber(value);
        return;

      default:
        return;
    }
  };

  const findByName = contactName => {
    return contacts.some(({ name }) => name === contactName);
  };

  const findByNumber = contactNumber => {
    return contacts.some(({ number }) => number === contactNumber);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (findByName(name) && findByNumber(number)) {
      alert(`${name} is already in contacts!`);
    } else {
      distatch(addContact({ name, number }));
    }
    reset();
  };

  return (
    <Form onSubmit={handleSubmit} className={s.form}>
      <Form.Group className="mb-3">
        <Form.Label>
          Name
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            className={s.own}
            
            onChange={handleChange}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Number
          <Form.Control
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            className={s.own}
            onChange={handleChange}
          />
        </Form.Label>
      </Form.Group>
      <Button variant="warning" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
