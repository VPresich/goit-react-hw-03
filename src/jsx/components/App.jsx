import { useState } from 'react';
import { nanoid } from 'nanoid';

import { TitleSection } from './titlesection/TitleSection';
import { ContactsList } from './contacts-list/ContactsList';
import { SearchBox } from './search-box/SearchBox';
import { ContactForm } from './contact-form/ContactForm';
import { contactsData } from '../../data/contactsData';

export const App = () => {
  const [contacts, setContacts] = useState(contactsData);
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

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <TitleSection> Phone Book</TitleSection>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={e => setFilter(e.target.value)} />
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
