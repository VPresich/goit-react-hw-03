import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { INIT_CONTACT } from '../../auxiliary/constants';

import { CustomButton } from '../custom-button/CustomButton';
import styles from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ onAddContact, children }) => {
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
              Name:
            </label>
            <Field
              className={styles.input}
              id={nameId}
              type="text"
              name="name"
            />
            <ErrorMessage className={styles.error} name="name" as="span" />
          </div>
          <div>
            <label className={styles.label} htmlFor={phoneId}>
              Number:
            </label>
            <Field
              className={styles.input}
              id={phoneId}
              type="tel"
              name="number"
            />
            <ErrorMessage className={styles.error} name="number" as="span" />
          </div>
        </div>
        <CustomButton typeBtn="submit">{children}</CustomButton>
      </Form>
    </Formik>
  );
};
