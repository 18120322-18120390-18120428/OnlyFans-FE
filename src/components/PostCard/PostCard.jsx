import React, { useState } from 'react';

import {
  Button,
  Box,
  Menu,
  MenuItem,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';
import ImageGrid from '../ImageGrid/ImageGrid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const PostCard = ({ postId, content, images, isSubscriber = false, infoUser, amount }) => {
  const [isLock, setIsLock] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickCopyLinkToPost = () => {
    navigator.clipboard.writeText(postId);
    toast.success(`Link to profile was copied to clipboard!`, {
      position: 'bottom-left',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const viewInfoUser = (infoUser) => {
    if (!infoUser) {
      return <></>;
    }

    return (
      <CardHeader
        avatar={
          <Link to={`/user/${infoUser.nickName}`} style={{ textDecoration: 'none', color: '#000' }}>
            <Avatar aria-label="recipe" src={infoUser.avatar} alt={infoUser.name} />{' '}
          </Link>
        }
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ color: '#8a96a3', fontSize: '14px', marginRight: '4px' }}>
              Jan 1
            </Typography>
            <IconButton aria-label="settings" sx={{ minWidth: '45px' }}>
              <span
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </span>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    onClickCopyLinkToPost();
                  }}
                >
                  Copy link to post
                </MenuItem>
              </Menu>
            </IconButton>
          </Box>
        }
        title={
          <Link to={`/user/${infoUser.nickName}`} style={{ textDecoration: 'none', color: '#000' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <strong>{infoUser.name}</strong>
              <VerifiedOutlinedIcon sx={{ height: '19px', width: '19px', marginLeft: '3px' }} />
            </Box>
          </Link>
        }
        subheader={`@${infoUser.nickName}`}
      />
    );
  };

  const viewImages = (amount, isSubscriber, isLock, setIsLock) => {
    if ( isSubscriber) {
      return (
        <Box sx={{ width: 'calc(100% - 20px)' }}>
          <ImageGrid images={images} />
        </Box>
      );
    }

    return (
      <Box
        sx={{
          background: `url('data:image/png;base64,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') 50%/cover`,
          width: '100%',
          height: '320px',
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
          {isLock ? (
            <LockOutlinedIcon sx={{ height: '64px', width: '64px' }} />
          ) : (
            <LockOpenOutlinedIcon sx={{ height: '64px', width: '64px' }} />
          )}
          <Box
            sx={{
              border: '1px solid #ccc',
              width: 'calc(100% - 32px)',
              height: '95px',
              bottom: '15px',
              position: 'absolute',
              margin: '0 15px',
              borderRadius: '6px',
              padding: '15px',
              boxSizing: 'border-box',
              fontsize: '12px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImageOutlinedIcon sx={{ height: '12px', width: '12px' }} />
              <span style={{ fontSize: '12px', marginLeft: '3px' }}>{images.length}</span>
            </Box>

            <Button
              sx={{
                width: '100%',
                backgroundColor: '#00aff0',
                borderRadius: '1000px',
                color: '#fff',
                fontWeight: 500,
                marginTop: '10px',
                '&:hover': {
                  backgroundColor: '#00aff0',
                  opacity: 0.7,
                },
              }}
              onMouseOver={() => setIsLock(!isLock)}
              onMouseOut={() => setIsLock(!isLock)}
            >
              Subscribe to see user's posts
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: '0px',
        borderBottom: '1px solid #ccc',
        paddingBottom: '10px',
      }}
    >
      {viewInfoUser(infoUser)}

      <CardContent>
        <Typography variant="body2" sx={{ color: '#000', fontSize: '15px' }}>
          {content}
        </Typography>
      </CardContent>

      {viewImages(amount, isSubscriber, isLock, setIsLock)}

      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlinedIcon sx={{ color: '#8a96a3' }} />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineOutlinedIcon sx={{ color: '#8a96a3' }} />
          </IconButton>
          <IconButton aria-label="tip" sx={{ borderRadius: '1000px' }}>
            <PaidOutlinedIcon sx={{ color: '#8a96a3' }} />
            <Box sx={{ fontSize: '14px', marginLeft: '7px', fontWeight: 600, color: '#8a96a3' }}>
              SEND TIP
            </Box>
          </IconButton>
        </Box>
        <IconButton aria-label="bookmark" sx={{ float: 'right' }}>
          <BookmarkBorderOutlinedIcon sx={{ color: '#8a96a3' }} />
        </IconButton>
      </CardActions>
      <Typography sx={{ marginLeft: '15px', fontSize: '14px', color: '#000' }}>
        <b>0</b> likes
      </Typography>
    </Card>
  );
};
