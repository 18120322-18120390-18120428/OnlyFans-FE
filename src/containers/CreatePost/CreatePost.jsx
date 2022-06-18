import React, { useEffect, useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import postApi from '../../services/postAxios';
import { PostForm } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { loadContract } from '../../utils/load-contract';
import { toast } from 'react-toastify';
export const CreatePost = () => {
  const history = useNavigate();
  const [content, setContent] = useState('');
  const [imageList, setImageList] = useState([]);
  const [index, setIndex] = useState(1);
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [accountList, setAccountList] = useState([]);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  const [shouldReload, reload] = useState(false);
  const reloadEffect = () => reload(!shouldReload);

  const setAccountLister = (provider) => {
    provider.on('accountChanged', (accounts) => setAccount(accounts[0]));
  };
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const contract = await loadContract('Faucet', provider);
      console.log(contract, provider);
      //debugger

      if (provider) {
        setAccountList(provider);
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
        console.error('please, Install Metamask');
      }
    };
    loadProvider();
  }, []);
  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  const onSelectFile = (e, i) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    const readerImage = new FileReader();
    readerImage.readAsDataURL(e.target.files[0]);
    readerImage.onloadend = () => {
      if (imageList.length > i) {
        imageList[i].image = String(readerImage.result);
        imageList[i].preview = objectUrl;
        setImageList([...imageList]);
      } else {
        imageList.push({ order: i, image: String(readerImage.result), preview: objectUrl });
        setImageList([...imageList]);
        const temp = index + 1;
        setIndex(temp);
      }
    };
    return () => URL.revokeObjectURL(objectUrl);
  };
  const handleClearImageWithIndex = (i) => {
    const images = [];
    imageList.map((item) => {
      if (item.order !== i) {
        item.order = images.length + 1;
        images.push(item);
      }
      // eslint-disable-next-line array-callback-return
      return;
    });
    setImageList([...images]);
    const temp = index - 1;
    setIndex(temp);
  };
  const handleClearAllImage = () => {
    setImageList([]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (account) {
      const formData = {
        authorId: '121',
        content: content,
        images: imageList,
        fee: 0,
      };
      const data = await postApi.createPost(formData);
      console.log(data);
    } else {
      web3Api.provider
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          console.log(accounts);
          setAccount(accounts);
        })
        .catch((error) => {
          if (error.message === 'Already processing eth_requestAccounts. Please wait.') {
            toast.warning(`Please connect Metamask before create new post`, {
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
        });
    }

    return;
  };
  const onClickBack = () => {
    if (history.action === 'PUSH') {
      history.goBack();
    } else {
      history.push({
        pathname: `/`,
      });
    }
  };

  return (
    <Box
      sx={{ maxWidth: '600px', borderRight: '1px solid rgba(138,150,163,.25)', minHeight: '100%' }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'sticky',
          top: '0',
          height: '58px',
          zIndex: '1000',
          padding: '0 15px',
          alignItems: 'center',
          borderBottom: '1px solid #ccc',
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to={'/'}>
            <Button
              sx={{
                padding: 0,
                minWidth: '30px',
                '&:hover': { backgroundColor: '#0091ea12' },
                display: 'flex',
                alignItems: 'center',
                borderRadius: '1000px',
                height: '30px',
              }}
            >
              <span style={{ display: 'flex' }}>
                <ArrowBackIcon sx={{ color: '#000' }} />
              </span>
            </Button>
          </Link>
          <Box
            sx={{
              display: 'flex',
              color: '#000',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '15px',
            }}
          >
            <Typography
              sx={{ fontSize: '19px', fontWeight: '600', display: 'flex', alignItems: 'center' }}
            >
              NEW POST
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              border: '1px solid #ccc',
              borderRadius: '1000px',
              color: '#00aff0',
              marginRight: '8px',
            }}
            onClick={() => {
              setContent('');
              handleClearAllImage();
            }}
          >
            CLEAR
          </Button>
          {content !== '' && content !== undefined ? (
            <Button
              sx={{
                border: '1px solid #00aff0',
                borderRadius: '1000px',
                color: '#fff',
                background: '#00aff0',
                fontWeight: 600,
              }}
              onClick={(e) => handleSubmit(e)}
            >
              POST
            </Button>
          ) : (
            <button
              style={{
                border: '1px solid rgba(138,150,163,.75)',
                borderRadius: '1000px',
                color: '#fff',
                background: 'rgba(138,150,163,.75)',
                padding: '10px 13px',
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              POST
            </button>
          )}
        </Box>
      </Box>
      <PostForm
        content={content}
        setContent={setContent}
        imageList={imageList}
        setImageList={setImageList}
        index={index}
        setIndex={setIndex}
        handleClearImageWithIndex={handleClearImageWithIndex}
        onSelectFile={onSelectFile}
        handleClearAllImage={handleClearAllImage}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
};
