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

export const PostCard = () => {
  const [isLock, setIsLock] = useState(true);
  const [isSubscriber, setIsSubscriber] = useState(true);
  const images = [
    'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/49581087_2207478666180288_9189463682369716224_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kGy40evfGnMAX8_uYda&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_UqwmTpbFO4tYM6w2IlSO8RKPjkfFKA0T8N3_WsV7LOA&oe=62C0CF33',
    'https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/285669166_185234820513123_5815671142913476595_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=2AwsRehY1yQAX_h2kyu&tn=aEF5ZtUrwg0SyLX3&_nc_ht=scontent.fhan4-2.fna&oh=00_AT9VGzz1Pvi5_ZPgVJuG0djRB-imL8-YMvNrArPbA9QFbQ&oe=629FE7D6',
    'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/285008274_184383317264940_612484162906972251_n.jpg?stp=dst-jpg_p640x640&_nc_cat=107&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=CTNYLf2l4csAX9gdHkb&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-eiMNqkh0kg-Ujld7hweBEj_BLsQ5Z_4YF7tbZp2WjzA&oe=629FA2F5',
    'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/284590897_184245943945344_3872330028188676395_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=_HLnlA0Pt_MAX9EZOaH&_nc_ht=scontent.fhan3-3.fna&oh=00_AT_Tb-WrAawnY4wV54Y9BCYF9nCw4UHry4Hyrd8avb_xXA&oe=629F1A8A',
    'https://linkvaobong88ag.club/wp-content/uploads/2022/01/tran-huyen-chau-2.jpg',
    'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/280451238_1171219027059744_5143723418706135295_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=dFPylxJNGLkAX9yHL9t&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8IjOcBAO4J6NqYcL_KSq6Hc4GTtHG0uNdif81UTweOzw&oe=629F8326',
  ];
  useEffect(() => {});
  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            ndh
          </Avatar>
        }
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ color: '#8a96a3', fontSize: '14px' }}>Jan 1</Typography>
            <IconButton aria-label="settings">
              <MoreHorizIcon />
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
          happy new year !!! so happy i found this platform in 2021 & all of you. very thankful for
          everyone who supports me and uplifts me daily! wishing you all a fun new years eve & all
          the best in 2022. 🤍🪴 focusing on growth & new beginnings full of love. can’t wait to see
          what the new year brings us all !! xoxo
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
