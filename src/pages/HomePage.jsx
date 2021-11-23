import React from 'react';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';


const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'green',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Hello, I'm your Contacts Book{' '}
      <BsFillJournalBookmarkFill />
    </h1>
  </div>
);

export default HomePage;
