import { store } from '../store/ConfigureStore';

const getAuthToken = () => {
  const authData = store.getState().auth;
  return authData?.auth?.value || null;
};

const isValidToken = () => {
  const authData = store.getState().auth;
  if (authData?.auth?.value && authData?.auth?.expires) {
    const expireDate = new Date(authData?.auth?.expires);
    // console.log("===new Date(): ", new Date());
    // console.log("===expireDate: ", expireDate);
    return new Date() < expireDate;
  }
  return false;
};

export { getAuthToken, isValidToken }; 