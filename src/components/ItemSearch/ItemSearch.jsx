import React from 'react';
import './ItemSearch.scss';

import { useNavigate } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Typography,
  Avatar,
  Button,
} from '@mui/material';

export const ItemSearch = ({ avatar, name, nickName }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/user/${nickName}`);
  };

  return (
    <List
      sx={{
        width: '90%',
        bgcolor: 'rgba(138, 150, 163, 0.25)',
        borderRadius: '20px',
        marginTop: '14px',
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name} src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                @{nickName}
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemButton
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            ':hover': {
              backgroundColor: 'inherit',
            },
          }}
        >
          <Button variant="contained" sx={{ borderRadius: '1000px' }} onClick={handleViewProfile}>
            View Profile
          </Button>
        </ListItemButton>
      </ListItem>
    </List>
  );
};
