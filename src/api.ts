// import url from 'url'
import axios from 'axios';
import Toast from './components/Toast';
import { getAuthToken } from './common/Utility';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  },
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearer ' + getAuthToken();
  return config;
},
  (error) => {
    if (navigator && !navigator.onLine) {
      Toast({ title: '', message: 'No Internet connection available', type: 'error' });
    } else {
      Toast({ title: '', message: 'Oops, something went wrong', type: 'error' });
    }
    Promise.reject(error)
  });

instance.interceptors.response.use(response => {
  const { headers, data } = response
  if (headers['x-display-msg']) {
    Toast({ title: '', message: headers['x-display-msg'], type: 'success' });
  } else if (response && data && data.message) {
    Toast({ title: '', message: data.message, type: 'success' });
  }
  return response
}, error => {
  const { response = {}, request = {}, message } = error;
  const { status, data, headers } = response;
  const { responseURL } = request;

  if (message === 'Network Error') {
    Toast({ title: '', message: 'No Internet connection available', type: 'error' });
    return Promise.reject(error)
  }

  //   if (headers && headers['x-display-msg']) {
  //     Toast({ title: '', message: headers['x-display-msg'], type: 'error' });
  //   } else if (error.raw && error.error) {
  //     Toast({ title: '', message: error.error.message, type: 'error' });
  //   } else if (data && data.errors && data.errors.message) {
  //     Toast({ title: '', message: data.errors.message, type: 'error' });
  //   } else if (data && data.message) {
  //     Toast({ title: '', message: data.message, type: 'error' });
  //   }

  if (status === 401) {
    Toast({ title: 'Unauthorized!', message: 'Authorization required.', type: 'error' });
    return Promise.reject(error)
  }
  if (status === 500) {
    Toast({ title: 'Unreachable!', message: 'Internal Serve Error.', type: 'error' });
    return Promise.reject(error)
  }
  if (status === 400) {
    Toast({ title: 'Invalid!', message: 'Bad Request.', type: 'error' });
    return Promise.reject(error)
  }

  // if ((status === 405) && url.parse(responseURL).pathname !== '/login') {
  //   if (window.location.pathname !== '/login') {
  //     window.location = '/logout'
  //   }
  // }
  return Promise.reject(error)
});

export default instance;
