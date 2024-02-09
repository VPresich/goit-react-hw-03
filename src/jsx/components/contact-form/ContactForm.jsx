import { useState, useId } from 'react';
import styles from './ContactForm.module.css';
import { CustomButton } from '../custom-button/CustomButton';

export const ContactForm = ({ onAddContact }) => {
  const nameId = useId();
  const phoneId = useId();

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.info}>
        <label className={styles.label} htmlFor={nameId}>
          Name:
        </label>
        <input
          className={styles.input}
          id={nameId}
          type="text"
          value={name}
          required
          onChange={event => setName(event.target.value)}
        />
        <label className={styles.label} htmlFor={phoneId}>
          Number:
        </label>
        <input
          className={styles.input}
          id={phoneId}
          type="tel"
          value={number}
          required
          onChange={event => setPhone(event.target.value)}
        />
      </div>
      <CustomButton type="submit">Add Contact</CustomButton>
    </form>
  );
};
