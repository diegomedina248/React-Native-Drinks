import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const client = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: { 'content-type': 'application/json' },
});


client.interceptors.request.use(
  config => config,
  (error) => {
    console.debug('Failed to make request with error:'); // eslint-disable-line no-console
    console.debug(error); // eslint-disable-line no-console
    return Promise.reject(error);
  },
);

client.interceptors.response.use(response => response, (error) => {
  console.log('Request got response with error:'); // eslint-disable-line no-console
  console.log(error); // eslint-disable-line no-console
  return Promise.reject(error);
});

export default client;
