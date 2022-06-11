import basicAxios from './basicAxios';
const postApi = {
  
  createPost: async (requestOption) => {
    const url = 'post/create-post';
    return await basicAxios.post(url, requestOption);
  },
  getPostByAuthorId: async (id) =>{
    const url = `post/author-id?authorId=${id}`;
    return await basicAxios.get(url);
  }
};
export default postApi;