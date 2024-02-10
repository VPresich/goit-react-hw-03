import { KEY_LOCALSTORAGE } from '../constants';
import { contactsData } from '../contactsData';

const devMode = import.meta.env.VITE_DEV_MODE;

export const getContactsList = () => {
  const strSavedData = localStorage.getItem(KEY_LOCALSTORAGE);

  console.log('VITE_DEV_MODE', devMode);

  if (!strSavedData) return contactsData;
  const localData = JSON.parse(strSavedData);
  if (!localData.length && devMode) return contactsData;

  return localData;

  // if (window.DEV_MODE) {
  //   return (strSavedData && JSON.parse(strSavedData)) || contactsData;
  // } else {
  //   return (strSavedData && JSON.parse(strSavedData)) || [];
  // }
};
