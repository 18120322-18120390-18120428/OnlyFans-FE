import adminAxios from "./adminAxios";

const userApi = {
  getInfo: async () => {
    const url = `user/get-info`;
    return await adminAxios.get(url);
  },
  login: async (params) => {
    const url = `user/login`;
    return await adminAxios.get(url, { params });
  },
  rigister: async (params) => {
    const url = `user/rigister`;
    return await adminAxios.get(url, { params });
  },
};

export default userApi;
