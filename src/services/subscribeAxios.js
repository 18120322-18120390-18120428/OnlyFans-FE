import basicAxios from './basicAxios';

const subscribeApi = {
  addNewSubscribe: async (requestOption) => {
    const url = 'subscribe/add-new-subscriber';
    return await basicAxios.post(url, requestOption);
  },
  getSubscribe: async (subscriberId, idolId) =>{
    const url = `subcribe/is-subscribe?subscriberId=${subscriberId}&idolId=${idolId}`;
    return await basicAxios.get(url);
  }
};
export default subscribeApi;