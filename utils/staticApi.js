const INITIAL_CONFIG = {
  withCredentials: true,
  crossDomain: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Application-Source': 'react',
  },
  exposedHeaders: ['set-cookie'],
};

const staticApi = (axios) => {
  const config = {
    ...INITIAL_CONFIG,
    baseURL: process.env.API_URL,
  };
  const instance = axios.create(config);

  instance.CancelToken = axios.CancelToken;
  instance.isCancel = axios.isCancel;

  return instance;
};

const customStaticApi = (axios) => {
  const config = {
    ...INITIAL_CONFIG,
    baseURL: process.env.API_BOLT_URL,
  };
  const instance = axios.create(config);

  instance.CancelToken = axios.CancelToken;
  instance.isCancel = axios.isCancel;

  return instance;
};

export { staticApi, customStaticApi };
