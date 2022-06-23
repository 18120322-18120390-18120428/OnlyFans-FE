import basicAxios from './basicAxios';

const postApi = {
  getPostByAuthorId: async (id) => {
    const url = `post/author-id?authorId=${id}`;
    return await basicAxios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  },
  getPostsByCondition: async (params) => {
    const url = 'post/get-all';
    return await basicAxios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  },
  createPost: async (requestOption) => {
    const url = 'post/create-post';
    return await basicAxios.post(url, requestOption, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  },
};
export default postApi;
