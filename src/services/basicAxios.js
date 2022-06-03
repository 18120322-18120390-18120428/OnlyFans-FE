import axios from 'axios';
import queryString from 'query-string';
const basicURL = process.env.REACT_APP_URL_MY_API_BASIC;
const token = localStorage.getItem('jwt');

const basicAxios = axios.create({
  baseURL: basicURL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

basicAxios.interceptors.response.use(
  (res) => {
    if (res.data.result === 0) {
      // logout(buildysURL + "");
    }
    return res;
  },
  (err) => {
    if (err.response?.status === 401) {
      // logout(buildysURL + "");
    }
    throw err;
  },
);

export default basicAxios;
