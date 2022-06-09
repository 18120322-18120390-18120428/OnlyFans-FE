import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

import { PostForm } from '../../components';

export const CreatePost = () => {
  return (
    <Box sx={{ maxWidth: '600px',  borderRight: '1px solid rgba(138,150,163,.25)', minHeight: '100%' }}>
      <PostForm />
    </Box>
  );
};
