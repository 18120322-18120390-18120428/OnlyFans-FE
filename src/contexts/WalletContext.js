import React, { useState, useEffect, useCallback } from "react";
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { loadContract } from "../utils/load-contract";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import walletApi from "../services/walletAxios";
const WalletContext = React.createContext();

export default WalletContext;
export const WalletProvider = ({ children }) => {
    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,
        contract: null
    })
    const [accountList, setAccountList] = useState([]);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
    const user = useSelector((state) => state.userSlice.account);

    const setAccountLister = (provider) => {
        provider.on("accountChanged", accounts => setAccount(accounts[0]))
    }
    useEffect(() => {
        const loadProvider = async () => {
            const provider = await detectEthereumProvider()
            const contract = await loadContract("Faucet", provider)

            // debugger

            if (provider) {
                setAccountList(provider)
                setWeb3Api({
                    web3: new Web3(provider),
                    provider,
                    contract
                })
            } else {
                console.error("please, Install Metamask")
            }
        }
        loadProvider()
    }, [])
    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3Api.web3.eth.getAccounts()
            setAccount(accounts[0])
        }
        web3Api.web3 && getAccount()
    }, [web3Api.web3]);

    useEffect(() => {
        const loadBalance = async () => {
            const { contract, web3 } = web3Api
            const balance = await web3.eth.getBalance(contract.address)
            setBalance(web3.utils.fromWei(balance, "ether"))

        }
        web3Api.contract && loadBalance()
    }, [web3Api]);

    const addFunds = useCallback(async (wei = 3) => {
        const { contract, web3 } = web3Api
        await contract.addFunds({
            from: account,
            value: web3.utils.toWei(String(wei), "ether")
        })

    }, [web3Api, account])


    const withdraw = async (wei = 3) => {
        const { contract, web3 } = web3Api
        const withdrawAmount = web3.utils.toWei(String(wei), "ether")
        await contract.withdraw(withdrawAmount, {
            from: account
        })
    }
    const addNewWalletAddress = async (holderId, walletAddress) => {
        const res = await walletApi.addWalletAddress({ holderId: holderId, walletAddress: walletAddress });
        return res
    }
    const connectWallet = async () => {
        web3Api.provider
            .request({ method: 'eth_requestAccounts' })
            .then((accounts) => {
                console.log(accounts);
                setAccount(accounts[0]);
                const res = addNewWalletAddress(user._id, accounts[0]);
                console.log(res);
            })
            .catch((error) => {
                if (error.message === 'Already processing eth_requestAccounts. Please wait.') {
                    toast.warning(`Please connect Metamask before taking action`, {
                        position: 'bottom-left',
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    console.error(error);
                }
            })
    }
    return (
        <WalletContext.Provider
            value={{
                web3Api,
                withdraw,
                connectWallet,
                account,
                addFunds,
                accountList,
                balance
            }}>
            {children}
        </WalletContext.Provider>
    );
}