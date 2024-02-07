import { useState } from 'react';
import styles from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name && number) {
      onAddContact({ name, number });

      setName('');
      setPhone('');
    }
  };

  return (
    <form className={styles['contact-form']} onSubmit={handleSubmit}>
      <div className={styles['contact-info']}>
        <label className={styles['contact-label']} htmlFor="nameInput">
          Name:
        </label>
        <input
          className={styles['contact-input']}
          id="nameInput"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <label className={styles['contact-label']} htmlFor="phoneInput">
          Number:
        </label>
        <input
          className={styles['contact-input']}
          id="phoneInput"
          type="text"
          value={number}
          onChange={event => setPhone(event.target.value)}
        />
      </div>
      <button className={styles['add-button']} type="submit">
        Add Contact
      </button>
    </form>
  );
};
