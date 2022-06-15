import basicAxios from './basicAxios';

const userApi = {
  getInfo: async () => {
    const url = `user/get-info`;
    return await basicAxios.get(url);
  },
  login: async (requestOption) => {
    const url = `user/login`;
    return await basicAxios.post(url, requestOption);
  },
  register: async (requestOption) => {
    const url = `user/register`;
    return await basicAxios.post(url, requestOption);
  },
};

export default userApi;
