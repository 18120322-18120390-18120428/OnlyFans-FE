import React, { useEffect } from 'react';
import { DetailInfo, MediaCard, PostCard, Subscribe } from '../../components';
import './PersonalInfo.scss';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CircleIcon from '@mui/icons-material/Circle';
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {});
  const images = [
    '',
    'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/49581087_2207478666180288_9189463682369716224_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kGy40evfGnMAX8_uYda&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_UqwmTpbFO4tYM6w2IlSO8RKPjkfFKA0T8N3_WsV7LOA&oe=62C0CF33',
    'https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/285669166_185234820513123_5815671142913476595_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=2AwsRehY1yQAX_h2kyu&tn=aEF5ZtUrwg0SyLX3&_nc_ht=scontent.fhan4-2.fna&oh=00_AT9VGzz1Pvi5_ZPgVJuG0djRB-imL8-YMvNrArPbA9QFbQ&oe=629FE7D6',
    'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/285008274_184383317264940_612484162906972251_n.jpg?stp=dst-jpg_p640x640&_nc_cat=107&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=CTNYLf2l4csAX9gdHkb&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-eiMNqkh0kg-Ujld7hweBEj_BLsQ5Z_4YF7tbZp2WjzA&oe=629FA2F5',
    'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/284590897_184245943945344_3872330028188676395_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=_HLnlA0Pt_MAX9EZOaH&_nc_ht=scontent.fhan3-3.fna&oh=00_AT_Tb-WrAawnY4wV54Y9BCYF9nCw4UHry4Hyrd8avb_xXA&oe=629F1A8A',
    'https://linkvaobong88ag.club/wp-content/uploads/2022/01/tran-huyen-chau-2.jpg',
    'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/280451238_1171219027059744_5143723418706135295_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=dFPylxJNGLkAX9yHL9t&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8IjOcBAO4J6NqYcL_KSq6Hc4GTtHG0uNdif81UTweOzw&oe=629F8326',
  ];
  return (
    <div className="personal-info">
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
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <span>
            <ArrowBackIcon sx={{ color: '#fff' }} />
          </span>
          <Box
            sx={{
              display: 'flex',
              color: '#fff',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '15px',
            }}
          >
            <Typography
              sx={{ fontSize: '19px', fontWeight: '600', display: 'flex', alignItems: 'center' }}
            >
              Yubook
              <VerifiedOutlinedIcon sx={{ height: '19px', width: '19px', marginLeft: '1px' }} />
            </Typography>
            <Typography
              sx={{ fontSize: '14px', color: '#fff', display: 'flex', alignItems: 'center' }}
            >
              @Yubook <CircleIcon sx={{ width: '4px', height: '4px', margin: '0 8px' }} />1 tỷ likes
            </Typography>
          </Box>
        </Box>
        <Box>
          <MoreVertIcon sx={{ color: '#fff' }} />
        </Box>
      </Box>
      <Box sx={{ top: 0, transform: 'translateY(-58px)' }}>
        <DetailInfo />
      </Box>
      <Box sx={{ marginTop: '10px' }}>
        <Subscribe />
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
          <PostCard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '8px' }}>
            {images.map((item, index) => {
              return <MediaCard src={item} alt={item} key={index}></MediaCard>;
            })}
          </Box>
        </TabPanel>
      </Box>
    </div>
  );
};
