import basicAxios from './basicAxios';

const walletApi = {
  addWalletAddress: async (requestOption) => {
    const url = 'wallet/add-new-wallet';
    return await basicAxios.post(url, requestOption, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  },
  getOneByHolderId: async (holderId) => {
    const url = `wallet/holder-id?holderId=${holderId}`;
    return await basicAxios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  },
  updateWallet: async (requestOption) => {
    const url = `wallet/update-wallet`;
    return await basicAxios.put(url, requestOption, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  },
};
export default walletApi;
