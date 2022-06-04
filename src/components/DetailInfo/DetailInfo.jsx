import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import ShareIcon from '@mui/icons-material/Share';
export const DetailInfo = () => {
  return (
    <>
      <Box
        sx={{
          height: '180px',
          display: 'block',
        }}
      >
        <img
          src="https://public.onlyfans.com/files/c/cq/cq1/cq16le7rkoy9tzyqfkn0foyuepovakvd1639844339/header.jpg"
          style={{ height: '180px', width: '100%', objectFit: 'cover' }}
          alt="background info"
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
              alt="yubook"
              src="https://public.onlyfans.com/files/thumbs/c144/f/fz/fzf/fzflfigxucv1ljc6ueiknbomse9weish1650907664/160715986/avatar.jpg"
              sx={{ width: 96, height: 96, objectFit: 'cover', border: '3px solid #fff' }}
            />
            <Box>
              <Typography
                sx={{ fontSize: '19px', fontWeight: '600', display: 'flex', alignItems: 'center' }}
              >
                Yubook
                <VerifiedOutlinedIcon sx={{ height: '19px', width: '19px', marginLeft: '1px' }} />
              </Typography>
              <Typography
                sx={{ fontSize: '14px', color: '#8a96a3', display: 'flex', alignItems: 'center' }}
              >
                @Yubook <CircleIcon sx={{ width: '4px', height: '4px', margin: '0 8px' }} />
                Last seen 7 hours ago
              </Typography>
              <Typography>I am photographer...</Typography>
              <Button>More info</Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ paddingTop: '48px', float: 'right' }}>
              <Button
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: '1000px',
                  width: '48px !important',
                  minWidth: '48px',
                  height: '48px',
                  color: '#00aff0',
                  marginRight: '10px'
                }}
              >
                <StarBorderPurple500OutlinedIcon />
              </Button>
              <Button  sx={{
                  border: '1px solid #ccc',
                  borderRadius: '1000px',
                  width: '48px !important',
                  minWidth: '48px',
                  height: '48px',
                  color: '#00aff0'
                }}>
                <ShareIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
