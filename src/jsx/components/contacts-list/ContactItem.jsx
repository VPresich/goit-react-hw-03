import styles from './ContactItem.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <div className={styles['item-info']}>
        <p className={styles['item-name']}>
          <FaUser /> {contact.name}
        </p>
        <p className={styles['item-number']}>
          <FaPhone /> {contact.number}
        </p>
      </div>
      <button
        className={styles['item-delete']}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
};
