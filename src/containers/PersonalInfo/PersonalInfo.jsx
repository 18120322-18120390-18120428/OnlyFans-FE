import React, { useEffect, useState, useContext } from 'react';
import './PersonalInfo.scss';

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailInfo, MediaCard, PostCard, Subscribe } from '../../components';
import postApi from '../../services/postApi';
import userApi from '../../services/userApi';
import WalletContext from '../../contexts/WalletContext';

import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

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
  const { username } = useParams();
  const navigate = useNavigate();
  const wallet = useContext(WalletContext);
  const account = useSelector((state) => state.userSlice.account);
  const pathCloudinary = process.env.REACT_APP_PATH_CLOUDINARY;

  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [top, setTop] = useState(-100);
  const [id, setId] = useState('');
  const [infoUser, setInfoUser] = useState(null);

  // Get Info User By NickName
  useEffect(() => {
    const getUser = async (nickName) => {
      try {
        const user = await userApi.getUser({ nickName: nickName });

        if (user.data) {
          setId(user.data._id);
          setInfoUser(user.data);
        } else {
          setId(null);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser(username);
  }, [username]);

  // Check nickname exist
  useEffect(() => {
    if (id === null) {
      navigate('/');
    }
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkSubscribe = async (subscriberId, idolId) => {
    const res = await wallet.checkSubscribe(subscriberId, idolId);
    setIsSubscribe(res);
    return res;
  };

  useEffect(() => {
    if (id) {
      if (account._id === id) {
        setIsSubscribe(true);
      } else {
        console.log(account._id, id, checkSubscribe(account._id, id));
        checkSubscribe(account._id, id);
      }
    }
  }, [account._id, id, wallet]);

  useEffect(() => {
    const getPostByAuthorId = async () => {
      const data = await postApi.getPostByAuthorId(`${id}`);

      data.data.map((item) => {
        let temp = item;
        temp.images = [];

        item.image.map((item) => temp.images.push(`${pathCloudinary}${item.url}`));
        posts.push(temp);
      });

      setPosts([...[], ...posts]);
    };

    if (id) {
      getPostByAuthorId();
    }
  }, [id]);

  useEffect(() => {
    function scrollFunction() {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        setTop(15);
      } else {
        setTop(-100);
      }
    }

    window.onscroll = function () {
      scrollFunction();
    };
  }, [document.body.scrollTop, document.documentElement.scrollTop, window.onscroll]);

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

      {infoUser && (
        <>
          <Box sx={{ top: 0, position: 'relative' }}>
            {account && (
              <DetailInfo
                name={infoUser.name}
                nickName={infoUser.nickName}
                avatar={infoUser.avatar}
                background={infoUser.background}
                job={infoUser.job}
                isAccount={account._id === id}
              />
            )}

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
                    sx={{
                      fontSize: '19px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {infoUser.name}
                    <VerifiedOutlinedIcon
                      sx={{ height: '19px', width: '19px', marginLeft: '1px' }}
                    />
                  </Typography>
                  <Typography
                    sx={{ fontSize: '14px', color: '#fff', display: 'flex', alignItems: 'center' }}
                  >
                    {`@${infoUser.nickName}`}
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
                infoUser={infoUser}
              />
            )}
          </Box>
        </>
      )}

      {posts && (
        <Box sx={{ width: '100%', marginTop: '10px', backgroundColor: '#fff' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="list posts" variant="fullWidth">
              <Tab label={`${posts.length} POSTS`} {...a11yProps(0)} />
              <Tab label="0 MEDIA" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
              {posts.map((item, index) => {
                return (
                  <PostCard
                    key={index}
                    postId={item._id}
                    content={item.content}
                    images={item.images}
                    isSubscriber={isSubscribe}
                    infoUser={infoUser}
                    amount={item.fee}
                  />
                );
              })}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '8px',
              }}
            >
              {posts.map((item, index) => {
                return <MediaCard src={item.images} alt={item._id} key={index}></MediaCard>;
              })}
            </Box>
          </TabPanel>
        </Box>
      )}
    </div>
  );
};
