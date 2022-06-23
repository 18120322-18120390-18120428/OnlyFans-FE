import React from 'react';

import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import CircleIcon from '@mui/icons-material/Circle';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import SettingsIcon from '@mui/icons-material/Settings';

import { Link } from 'react-router-dom';

export const DetailInfo = ({ name, nickName, avatar, background, job, isAccount }) => {
  return (
    <>
      <Box
        sx={{
          height: '180px',
          display: 'block',
        }}
      >
        <img
          src={background}
          style={{ height: '180px', width: '100%', objectFit: 'cover' }}
          alt={name}
        ></img>
      </Box>
      <Box
        sx={{
          marginTop: '-32px',
          paddingLeft: '16px',
          paddingRight: '16px',
          backgroundColor: '#fff',
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <Avatar
              alt={name}
              src={avatar}
              sx={{ width: 96, height: 96, objectFit: 'cover', border: '3px solid #fff' }}
            />
            <Box>
              <Typography
                sx={{ fontSize: '19px', fontWeight: '600', display: 'flex', alignItems: 'center' }}
              >
                {name}
                <VerifiedOutlinedIcon sx={{ height: '19px', width: '19px', marginLeft: '1px' }} />
              </Typography>
              <Typography
                sx={{ fontSize: '14px', color: '#8a96a3', display: 'flex', alignItems: 'center' }}
              >
                @{nickName} <CircleIcon sx={{ width: '4px', height: '4px', margin: '0 8px' }} />
                Last seen 7 hours ago
              </Typography>
              {job && <Typography>I am {job}</Typography>}            
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ paddingTop: '48px', float: 'right' }}>
              {isAccount ? (
                <Link to="/edit-profile" style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      border: '1px solid #ccc',
                      borderRadius: '1000px',
                      width: '160px !important',
                      minWidth: '48px',
                      height: '48px',
                      color: '#00aff0',
                      marginRight: '10px',
                      textDecoration: 'none',
                    }}
                  >
                    <SettingsIcon />
                    <span style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      Edit Profile
                    </span>
                  </Button>
                </Link>
              ) : (
                <>
                  <Button
                    sx={{
                      border: '1px solid #ccc',
                      borderRadius: '1000px',
                      width: '48px !important',
                      minWidth: '48px',
                      height: '48px',
                      color: '#00aff0',
                      marginRight: '10px',
                    }}
                  >
                    <StarBorderPurple500OutlinedIcon />
                  </Button>
                  <Button
                    sx={{
                      border: '1px solid #ccc',
                      borderRadius: '1000px',
                      width: '48px !important',
                      minWidth: '48px',
                      height: '48px',
                      color: '#00aff0',
                    }}
                  >
                    <ShareIcon />
                  </Button>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
