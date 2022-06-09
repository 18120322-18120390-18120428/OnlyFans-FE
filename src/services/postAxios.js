import basicAxios from './basicAxios';
const postApi = {
  
  createPost: async (requestOption) => {
    const url = 'post/create-post';
    return await basicAxios.post(url, requestOption);
  },
};
export default postApi;