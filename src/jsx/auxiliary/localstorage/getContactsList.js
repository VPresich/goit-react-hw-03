import { KEY_LOCALSTORAGE } from '../constants';
import { contactsData } from '../contactsData';

export const getContactsList = () => {
  const strSavedData = localStorage.getItem(KEY_LOCALSTORAGE);
  const initialContacts = strSavedData && JSON.parse(strSavedData);

  return initialContacts.length ? initialContacts : contactsData;
};
