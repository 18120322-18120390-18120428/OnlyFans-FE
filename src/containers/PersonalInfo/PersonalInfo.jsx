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
  useEffect(()=>{
    
  })
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
          alignItems: 'center'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <span>
            <ArrowBackIcon sx={{color: '#fff'}}/>
          </span>
          <Box sx={{ display: 'flex',color: '#fff', flexDirection: 'column', justifyContent: 'center', marginLeft: '15px' }}>
            <Typography
              sx={{ fontSize: '19px', fontWeight: '600', display: 'flex', alignItems: 'center' }}
            >
              Yubook
              <VerifiedOutlinedIcon sx={{ height: '19px', width: '19px', marginLeft: '1px' }} />
            </Typography>
            <Typography
              sx={{ fontSize: '14px', color: '#fff', display: 'flex', alignItems: 'center' }}
            >
              @Yubook <CircleIcon sx={{ width: '4px', height: '4px', margin: '0 8px' }} />
              1 tỷ likes
            </Typography>
          </Box>
        </Box>
        <Box>
          <MoreVertIcon sx={{color: '#fff'}}/>
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
          <MediaCard />
        </TabPanel>
      </Box>
    </div>
  );
};
