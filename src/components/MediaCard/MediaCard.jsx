import { Box } from '@mui/material';
import React from 'react';
import './MediaCard.scss';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
export const MediaCard = ({ src, alt, key }) => {
  return (
    <div key={key} className="media-card">
      {src ? (
        <img src={src} alt={alt} className="media-card__img"></img>
      ) : (
        <Box className="media-card__img">
          <Box
            sx={{
              background: `url('https://static.onlyfans.com/theme/onlyfans/spa/img/background.png') 50%/cover`,
              width: '100%',
              height: '198px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'inherit',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <LockOutlinedIcon sx={{ height: '64px', width: '64px', color: '#ccc' }} />

              <Box
                sx={{
                  width: 'calc(100% - 32px)',
                  bottom: '10px',
                  position: 'absolute',
                  margin: '0 10px',
                  borderRadius: '6px',
                  boxSizing: 'border-box',
                  fontsize: '12px',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImageOutlinedIcon sx={{ height: '16px', width: '16px', color: '#8a96a3' }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};
