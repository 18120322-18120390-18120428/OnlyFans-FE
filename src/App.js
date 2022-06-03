import "./App.css";
import { useCallback, useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { loadContract } from "./utils/load-contract";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

// import { Routers } from './routers';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });

  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  const [shouldReload, setShouldReload] = useState(false);
  const reloadEffect = () => setShouldReload(!shouldReload);

  const setAccountLister = (provider) => {
    provider.on("accountChanged", (accounts) => setAccount(accounts[0]));
  };

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const contract = await loadContract("Faucet", provider);

      debugger;

      if (provider) {
        setAccountLister(provider);
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
        console.error("please, Install Metamask");
      }
    };
    loadProvider();
  }, []);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccount() && reloadEffect();
  }, [web3Api.web3]);

  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3Api;
      const balance = await web3.eth.getBalance(contract.address);
      setBalance(web3.utils.fromWei(balance, "ether"));
    };
    web3Api.contract && loadBalance();
  }, [web3Api, shouldReload]);

  const addFunds = useCallback(async () => {
    const { contract, web3 } = web3Api;
    await contract.addFunds({
      from: account,
      value: web3.utils.toWei("1", "ether"),
    });
    reloadEffect();
  }, [web3Api, account]);

  const withdraw = async () => {
    const { contract, web3 } = web3Api;
    const withdrawAmount = web3.utils.toWei("0.5", "ether");
    await contract.withdraw(withdrawAmount, {
      from: account,
    });
    reloadEffect();
  };

  return (
    <div className="app">
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ví: <b>{balance}</b> ETH
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {account ? account : "You should login"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="success" onClick={addFunds}>
            Gửi Tiền
          </Button>
          <Button variant="contained" onClick={withdraw}>
            Nhận Tiền
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() =>
              web3Api.provider.request({ method: "eth_requestAccounts" })
            }
          >
            Truy Cập Ví
          </Button>
        </CardActions>
      </Card>
    </div>
    // <div className="App">
    //   <Routers />
    //   <ToastContainer />
    // </div>
  );
}

export default App;
