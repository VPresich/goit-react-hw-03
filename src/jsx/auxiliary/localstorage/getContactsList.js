import { KEY_LOCALSTORAGE } from '../constants';
import { contactsData } from '../contactsData';

export const getContactsList = () => {
  const strSavedData = localStorage.getItem(KEY_LOCALSTORAGE);

  console.log('window.DEV_MODE', window.DEV_MODE);

  if (!strSavedData) return contactsData;

  const localData = JSON.parse(strSavedData);
  if (!localData.length && window.DEV_MODE) return contactsData;

  return localData;

  // if (window.DEV_MODE) {
  //   return (strSavedData && JSON.parse(strSavedData)) || contactsData;
  // } else {
  //   return (strSavedData && JSON.parse(strSavedData)) || [];
  // }
};
