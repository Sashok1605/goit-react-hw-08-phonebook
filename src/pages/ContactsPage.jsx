import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

import Filter from '../components/Filter';
import '../App.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contacrsOperations';
import { Container } from 'react-bootstrap';


const App = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;