import styles from './ContactItem.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {contact.name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {contact.number}
        </p>
      </div>
      <button
        className={styles.delete}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
};
