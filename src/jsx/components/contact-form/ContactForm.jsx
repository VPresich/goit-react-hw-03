import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { INIT_CONTACT } from '../../auxiliary/constants';
import { FeedbackSchema } from '../../auxiliary/feedback-schema';

import {
  LABEL_NAME,
  LABEL_PHONE,
  CAPTION_ADD,
} from '../../auxiliary/constants';

import { CustomButton } from '../custom-button/CustomButton';
import styles from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INIT_CONTACT}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.contactform}>
        <div className={styles.info}>
          <div>
            <label className={styles.label} htmlFor={nameId}>
              {LABEL_NAME}
            </label>
            <Field
              className={styles.input}
              id={nameId}
              type="text"
              name="name"
            />
            <span className={styles.error}>
              <ErrorMessage name="name" as="span" />
            </span>
          </div>
          <div>
            <label className={styles.label} htmlFor={phoneId}>
              {LABEL_PHONE}
            </label>
            <Field
              className={styles.input}
              id={phoneId}
              type="tel"
              name="number"
            />
            <span className={styles.error}>
              <ErrorMessage name="number" as="span" />
            </span>
          </div>
        </div>
        <CustomButton typeBtn="submit">{CAPTION_ADD}</CustomButton>
      </Form>
    </Formik>
  );
};
