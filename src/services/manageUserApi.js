import basicAxios from './basicAxios';

const manageUserApi = {
  getAllUser: async (params) => {
    const url = `users/get-all`;
    return await basicAxios.get(url, { params });
  },
  getListTutors: async (params) => {
    const url = `users/get-tutors`;
    return await basicAxios.get(url, { params });
  },
  updateTutor: async (requestOption) => {
    const url = `users/update`;
    return await basicAxios.put(url, requestOption);
  },
};

export default manageUserApi;
