import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import Input from '@mui/material/Input';

export const CreatePost = () => {
  return (
    <Box sx={{ maxWidth: '600px' }}>
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
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <span>
            <ArrowBackIcon sx={{ color: '#000' }} />
          </span>
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
          >
            CLEAR
          </Button>
          <Button
            sx={{
              border: '1px solid #00aff0',
              borderRadius: '1000px',
              color: '#fff',
              background: '#00aff0',
            }}
          >
            POST
          </Button>
        </Box>
      </Box>
      <Box sx={{ minHeight: '100px', maxHeight: '250px' }}>
        <textarea
          style={{
            minHeight: '150px',
            width: '100%',
            padding: '15px',
            border: 'none',
            maxHeight: '250px',
            resize: 'none',
            outline: ' none',
            fontSize: '14px',
            boxSizing: 'border-box',
            '::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
          }}
        ></textarea>
      </Box>
      <Box sx={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
        <Button sx={{ minWidth: '30px' }}>
          <ImageOutlinedIcon sx={{ color: '#8a96a3', width: '24px', height: '24px' }} />
        </Button>
        <Button sx={{ minWidth: '30px' }}>
          <SortOutlinedIcon sx={{ color: '#8a96a3', width: '24px', height: '24px' }} />
        </Button>
        <Button sx={{ minWidth: '30px' }}>
          <QuizOutlinedIcon sx={{ color: '#8a96a3', width: '24px', height: '24px' }} />
        </Button>
      </Box>
    </Box>
  );
};
