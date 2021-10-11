import axios from "axios";
import { api } from '../../../config';

axios.defaults.baseURL = api;

axios
  .interceptors
  .request
  .use(function (config) {
    if (localStorage.getItem('auth_token')) {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('auth_token')}`;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default axios;
