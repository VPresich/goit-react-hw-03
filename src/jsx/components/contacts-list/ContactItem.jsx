import styles from './ContactItem.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

export const ContactItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={styles.delete} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};
