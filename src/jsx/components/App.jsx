import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import TitleSection from './titlesection/TitleSection';
import ContactsList from './contacts-list/ContactsList';
import SearchBox from './search-box/SearchBox';
import ContactForm from './contact-form/ContactForm';

import { getContactsList } from '../auxiliary/localstorage/getContactsList';
import { saveContactsList } from '../auxiliary/localstorage/saveContactsList';

import { SEARCH_LABEL, TITLE } from '../auxiliary/constants';

import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(getContactsList);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    setContacts(prevContacts => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleChangeSearch = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    saveContactsList(contacts);
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <TitleSection>{TITLE}</TitleSection>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleChangeSearch}>
        {SEARCH_LABEL}
      </SearchBox>
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
