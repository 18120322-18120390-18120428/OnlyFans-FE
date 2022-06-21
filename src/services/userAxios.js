import basicAxios from './basicAxios';

const userApi = {
  getInfo: async () => {
    const url = `user/get-info`;
    return await basicAxios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  },
  login: async (requestOption) => {
    const url = `user/login`;
    return await basicAxios.post(url, requestOption);
  },
  register: async (requestOption) => {
    const url = `user/register`;
    return await basicAxios.post(url, requestOption);
  },
  updateUser: async (requestOption) => {
    const url = 'user/update';
    return await basicAxios.put(url, requestOption, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  },
  searchUser: async (requestOption) => {
    const url = 'user/search';
    return await basicAxios.post(url, requestOption, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  },
};

export default userApi;
