import basicAxios from './basicAxios';

const timeApi = {
  getCurrentTime: async () => {
    const url = `time/current-time`;
    return await basicAxios.get(url);
  },
  
};

export default timeApi;
