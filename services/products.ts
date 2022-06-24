import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62b37756a36f3a973d228bb7.mockapi.io/',
});

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export const getProducts = () => {
  return instance.get('products');
};

export default instance;
