import React from 'react';

import { Button, Avatar, Dialog, Typography, DialogActions, Box, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

export const ConnectWalletModal = ({ onClose, selectedValue, open, connectWallet, infoUser }) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleClickAddWalletAddress = () => {
    onClose();
    connectWallet();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          height: '80px',
          display: 'block',
          width: '344px',
        }}
      >
        <img
          src={infoUser.background}
          style={{ height: '80px', width: '100%', objectFit: 'cover' }}
          alt="background info"
        ></img>
      </Box>
      <Box
        sx={{
          marginTop: '-32px',
          paddingLeft: '16px',
          paddingRight: '16px',
          width: '344px',
          boxSizing: 'border-box',
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Avatar
              alt={infoUser.name}
              src={infoUser.avatar}
              sx={{ width: 96, height: 96, objectFit: 'cover', border: '3px solid #fff' }}
            />
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ paddingTop: '40px', marginLeft: '10px' }}>
              <Typography
                sx={{ fontSize: '19px', fontWeight: '600', display: 'flex', alignItems: 'center' }}
              >
                {infoUser.name}
                <VerifiedOutlinedIcon sx={{ height: '19px', width: '19px', marginLeft: '1px' }} />
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>@{infoUser.nickName}</Typography>
            </Box>
          </Grid>
          <Box>
            <Typography
              sx={{ color: '#8a96a3', fontSize: '15px', fontWeight: '600', marginBottom: '10px' }}
            >
              SUBSCRIBE AND GET THESE BENEFITS:
            </Typography>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontSize: '15px' }}
            >
              <CheckIcon sx={{ color: '#00aff0', marginRight: '8px' }} />
              Full access to this user's content
            </Typography>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontSize: '15px' }}
            >
              <CheckIcon sx={{ color: '#00aff0', marginRight: '8px' }} />
              Direct message with this user
            </Typography>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontSize: '15px' }}
            >
              <CheckIcon sx={{ color: '#00aff0', marginRight: '8px' }} />
              Cancel your subscription at any time
            </Typography>
            <Button
              sx={{
                width: '100%',
                border: '1px solid #ccc',
                color: '#00aff0',
                borderRadius: '1000px',
                height: '48px',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '15px',
              }}
              onClick={handleClickAddWalletAddress}
            >
              Please add a wallet address
            </Button>
          </Box>
        </Grid>
      </Box>
      <DialogActions sx={{ borderTop: '1px solid #ccc' }}>
        <Button
          onClick={handleClose}
          sx={{ fontWeight: 600, color: '#00aff0', fontSize: '13px', borderRadius: '1000px' }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
