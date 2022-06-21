import React, { useState } from 'react';

import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const BoxSearch = () => {
  const navigate = useNavigate();
  const [querySearch, setQuerySearch] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    if (querySearch) {
      navigate(`/search/${querySearch}`);
    } else {
      toast.error('Please enter content search', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #8a96a3',
        width: '95%',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Try searching for name, username, email"
        inputProps={{ 'aria-label': 'search user' }}
        onChange={(e) => setQuerySearch(e.target.value)}
        required
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
