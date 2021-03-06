import React, { useState, useContext } from 'react';

import { Button, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link, useNavigate } from 'react-router-dom';
import { PostForm } from '../../components';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import WalletContext from '../../contexts/WalletContext';

import postApi from '../../services/postApi';
import walletApi from '../../services/walletApi';

export const CreatePost = () => {
  const navigate = useNavigate();
  const wallet = useContext(WalletContext);
  const account = useSelector((state) => state.userSlice.account);

  const [content, setContent] = useState('');
  const [imageList, setImageList] = useState([]);
  const [index, setIndex] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [amount, setAmount] = useState(false);

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
    setIsSubmitting(true);

    try {
      if (account) {
        const res = await walletApi.getOneByHolderId(account._id);
        
        if (res.status === 200) {
          const formData = {
            authorId: account._id,
            content: content,
            images: imageList,
            fee: amount,
          };
          
          const data = await postApi.createPost(formData);
          
          if (data.status === 200) {
            toast.success(`Create post success`, {
              position: 'bottom-left',
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            navigate(`/user/${account.nickName}`);
            setIsSubmitting(false);
          } else {
            toast.warning(`Create post failed`, {
              position: 'bottom-left',
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setIsSubmitting(false);
          }
        } else {
          setIsSubmitting(false);
          wallet.connectWallet();
        }
      }
    } catch (error) {
      setIsSubmitting(false);
      wallet.connectWallet();
      console.log(error);
    }

    return;
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
          {content !== '' && content !== undefined && !isSubmitting ? (
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
        amount={amount}
        setAmount={setAmount}
      />
    </Box>
  );
};
