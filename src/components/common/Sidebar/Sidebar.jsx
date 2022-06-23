import React, { useState } from 'react';
import './Sidebar.scss';

import {
  Button,
  Drawer,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  CardHeader,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { BiUserCircle, BiLogOutCircle } from 'react-icons/bi';
import { BsBookmark, BsListStars, BsCreditCard, BsBank2 } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const [state, setState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const account = useSelector((state) => state.userSlice.account);

  const listFunctions = [
    [
      {
        title: 'My profile',
        icon: <BiUserCircle />,
      },
      {
        title: 'Bookmarks',
        icon: <BsBookmark />,
      },
      {
        title: 'Lists',
        icon: <BsListStars />,
      },
      {
        title: 'Settings',
        icon: <FiSettings />,
      },
    ],
    [
      {
        title: 'Your Cards',
        icon: <BsCreditCard />,
      },
      {
        title: 'Add Banks',
        icon: <BsBank2 />,
      },
    ],
    [
      {
        title: 'Log out',
        icon: <BiLogOutCircle />,
      },
    ],
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const userInfo = (account) => {
    return (
      <List>
        <CardHeader
          avatar={
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Avatar alt={account.name} src={account.avatar} />
            </Badge>
          }
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <KeyboardArrowDownIcon />
            </IconButton>
          }
          title={account.name}
          subheader={`@${account.nickName}`}
        />
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <CardHeader
              avatar={<Avatar alt={account.name} src={account.avatar} />}
              title={account.name}
              subheader={account.email}
            />
          </MenuItem>
          <Divider />
          <MenuItem>
            <AddCircleOutlineIcon sx={{ mr: 3 }} /> Add another account
          </MenuItem>
        </Menu>
        <div className="sidebar__info">
          <Link to="/" className="sidebar__link">
            <span className="sidebar__count">0</span>
            <span className="sidebar__text">Fans</span>
          </Link>
          <Link to="/" className="sidebar__link">
            <span className="sidebar__count">0</span>
            <span className="sidebar__text">Following</span>
          </Link>
        </div>
      </List>
    );
  };

  const list = (arrayFunction) => (
    <>
      <List>
        {arrayFunction.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );

  return (
    account && (
      <React.Fragment key="sidebar">
        <Button onClick={toggleDrawer(true)}>
          <Avatar alt={account.name} src={account.avatar} />
        </Button>
        <Drawer anchor="left" open={state} onClose={toggleDrawer(false)} variant="temporary">
          <Box sx={{ width: 300 }} role="presentation" onKeyDown={toggleDrawer(false)}>
            {userInfo(account)}
            <Divider />
            {listFunctions.map((item) => list(item))}
          </Box>
        </Drawer>
      </React.Fragment>
    )
  );
};
