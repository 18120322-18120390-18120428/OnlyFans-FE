import axios from 'axios';
import queryString from 'query-string';
const adminURL = process.env.REACT_APP_URL_MY_API_ADMIN;
const token = localStorage.getItem('jwt');

const adminAxios = axios.create({
  baseURL: adminURL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

adminAxios.interceptors.response.use(
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

export default adminAxios;
