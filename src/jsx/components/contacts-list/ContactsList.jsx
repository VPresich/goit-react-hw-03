import styles from './ContactsList.module.css';
import { ContactItem } from './ContactItem';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles['contacts-list']}>
      {contacts.map(contact => (
        <li className={styles.contact} key={contact.id}>
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};
