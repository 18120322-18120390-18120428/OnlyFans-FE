import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Button } from '@mui/material';
import ImageGrid from '../ImageGrid/ImageGrid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { toast } from 'react-toastify';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export const PostCard = ({ postId, content, images }) => {
  const [isLock, setIsLock] = useState(true);
  const [isSubscriber, setIsSubscriber] = useState(true);
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
  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: '0px',
        borderBottom: '1px solid #ccc',
        paddingBottom: '10px',
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            ndh
          </Avatar>
        }
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ color: '#8a96a3', fontSize: '14px', marginRight: '4px' }}>
              Jan 1
            </Typography>
            <IconButton aria-label="settings" sx={{minWidth: '45px'}}>
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <strong>Nguyễn Hà Anh Kiểm</strong>
            <VerifiedOutlinedIcon sx={{ height: '19px', width: '19px', marginLeft: '3px' }} />
          </Box>
        }
        subheader="@sevenpain"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: '#000', fontSize: '15px' }}>
          {/* happy new year !!! so happy i found this platform in 2021 & all of you. very thankful for
          everyone who supports me and uplifts me daily! wishing you all a fun new years eve & all
          the best in 2022. 🤍🪴 focusing on growth & new beginnings full of love. can’t wait to see
          what the new year brings us all !! xoxo */}
          {content}
        </Typography>
      </CardContent>
      {/* <CardMedia
        component="img"
        height="194"
        image="https://static.onlyfans.com/theme/onlyfans/spa/img/background.png"
        alt="Paella dish"
      /> */}
      {isSubscriber ? (
        <Box sx={{ width: 'calc(100% - 20px)' }}>
          <ImageGrid images={images} />
        </Box>
      ) : (
        <Box
          sx={{
            background: `url('https://static.onlyfans.com/theme/onlyfans/spa/img/background.png') 50%/cover`,
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
                <span style={{ fontSize: '12px', marginLeft: '3px' }}>2</span>
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
      )}
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
        1 tỷ likes
      </Typography>
    </Card>
  );
};
