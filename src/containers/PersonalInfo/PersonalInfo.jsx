import React, { useEffect, useState } from 'react';
import './PersonalInfo.scss';

import PropTypes from 'prop-types';
import postApi from '../../services/postAxios';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailInfo, MediaCard, PostCard, Subscribe } from '../../components';
import { Tabs, Tab, Typography, Box, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WalletContext from '../../contexts/WalletContext';
import { useContext } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const PersonalInfo = () => {
  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const wallet = useContext(WalletContext);
  const account = useSelector((state) => state.userSlice.account);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [top, setTop] = useState(-100);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (account._id === id) {
      setIsSubscribe(true);
    }
  }, [account._id, isSubscribe]);
  const checkSubscribe = async (subscriberId, idolId) => {
    return await wallet.checkSubscribe(subscriberId, idolId);
  };

  useEffect(() => {
    console.log(wallet);
    if (wallet.account) {
      setIsSubscribe(checkSubscribe(account._id, id));
      console.log(checkSubscribe(account._id, id), account._id, id);
    }
  }, []);

  const getPostByAuthorId = async () => {
    const data = await postApi.getPostByAuthorId(`${account._id}`);
    console.log(data, process.env.PATH_CLOUDINARY);
    data.data.map((item, index) => {
      let temp = item;
      temp.images = [];
      console.log(temp);
      item.image.map((item) =>
        temp.images.push(`https://res.cloudinary.com/ndh/image/upload/v1639223470/${item.url}`),
      );
      posts.push(temp);
    });

    setPosts([...posts]);
  };

  useEffect(() => {
    if (account) {
      getPostByAuthorId();
    }
  }, [account]);

  useEffect(() => {
    console.log(document.documentElement.scrollTop, document.body.scrollTop);
    try {
      window.onscroll = function () {
        scrollFunction();
      };
    } catch (error) {
      console.log(error);
    }
  }, [document.body.scrollTop, document.documentElement.scrollTop, window.onscroll]);
  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      setTop(0);
    } else {
      setTop(-100);
    }
  }
  return (
    <div className="personal-info">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'fixed',
          top: `${top}px`,
          height: '58px',
          zIndex: '1000',
          padding: '0 15px 0 0',
          alignItems: 'center',
          transition: 'top 0.3s',
          backgroundColor: '#fff',
          width: '100%',
          maxWidth: '570px',
        }}
        id="navbar"
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button sx={{ borderRadius: '1000px', minWidth: '37px' }}>
            <Link to="/">
              <ArrowBackIcon sx={{ color: '#000' }} />
            </Link>
          </Button>
          <Box
            sx={{
              display: 'flex',
              color: '#fff',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '19px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                color: '#000',
              }}
            >
              OnlyFans
              <VerifiedOutlinedIcon
                sx={{ height: '19px', width: '19px', marginLeft: '1px', color: '#000' }}
              />
            </Typography>
          </Box>
        </Box>
        <Box>
          <MoreVertIcon sx={{ color: '#000' }} />
        </Box>
      </Box>
      <Box sx={{ top: 0, position: 'relative' }}>
        <DetailInfo
          name={account.name}
          nickName={account.nickName}
          avatar={account.avatar}
          background={account.background}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            top: '0',
            height: '58px',
            zIndex: '1000',
            padding: '0 15px 0 0',
            alignItems: 'center',
            transition: 'top 0.3s',
            width: '100%',
            maxWidth: '570px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button sx={{ borderRadius: '1000px', minWidth: '37px' }}>
              <Link to="/">
                <ArrowBackIcon sx={{ color: '#fff' }} />
              </Link>
            </Button>
            <Box
              sx={{
                display: 'flex',
                color: '#fff',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{ fontSize: '19px', fontWeight: '600', display: 'flex', alignItems: 'center' }}
              >
                {account.name}
                <VerifiedOutlinedIcon sx={{ height: '19px', width: '19px', marginLeft: '1px' }} />
              </Typography>
              <Typography
                sx={{ fontSize: '14px', color: '#fff', display: 'flex', alignItems: 'center' }}
              >
                {`@${account.nickName}`}
                <CircleIcon sx={{ width: '4px', height: '4px', margin: '0 8px' }} />1 tỷ likes
              </Typography>
            </Box>
          </Box>
          <Box>
            <MoreVertIcon sx={{ color: '#fff' }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: '10px' }}>
        {!isSubscribe && (
          <Subscribe
            subscriberId={account._id}
            idolId={id}
            checkSubscribe={checkSubscribe}
            setIsSubscribe={setIsSubscribe}
          />
        )}
      </Box>
      <Box sx={{ width: '100%', marginTop: '10px', backgroundColor: '#fff' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <Tab label="66 POSTS" {...a11yProps(0)} />
            <Tab label="1 TỶ MEDIA" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {posts &&
            posts.map((item, index) => {
              return (
                <PostCard
                  postId={item._id}
                  content={item.content}
                  images={item.images}
                  isSubscriber={isSubscribe}
                />
              );
            })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '8px' }}>
            {images.map((item, index) => {
              return <MediaCard src={item} alt={item} key={index}></MediaCard>;
            })}
          </Box> */}
        </TabPanel>
      </Box>
    </div>
  );
};
