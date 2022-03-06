import axios from 'axios';

const config = {
  withCredentials: true,
  crossDomain: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Application-Source': 'react',
  },
  exposedHeaders: ['set-cookie'],
};

if (process.env.NODE_ENV === 'production') {
  config.baseURL = process.env.API_URL;
}

const instance = axios.create(config);

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

config.baseURL = process.env.API_BOLT_URL;
const customInstance = axios.create(config);

customInstance.CancelToken = axios.CancelToken;
customInstance.isCancel = axios.isCancel;

export { instance, customInstance };
