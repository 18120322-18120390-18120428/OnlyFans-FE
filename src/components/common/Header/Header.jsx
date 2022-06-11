import React, { useState } from 'react';
import './Header.scss';

import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';

import { AiOutlineHome } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsBookmark, BsListStars, BsCreditCard } from 'react-icons/bs';
import { MdSubscriptions } from 'react-icons/md';
import { CgProfile, CgMoreO } from 'react-icons/cg';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const Header = () => {
  const className = 'header';
  const [active, setActive] = useState(0);
  const history = useNavigate();
  // const onClickCreateNewPost = () => {
  //   history.push('/create-post');
  // };
  const listItems = [
    {
      title: 'Home',
      icon: <AiOutlineHome size={32} />,
      url: '/',
    },
    {
      title: 'Notifications',
      icon: <IoNotificationsOutline size={32} />,
      url: '/',
    },
    {
      title: 'Messages',
      icon: <BiMessageSquareDetail size={32} />,
      url: '/',
    },
    {
      title: 'Bookmarks',
      icon: <BsBookmark size={32} />,
      url: '/',
    },
    {
      title: 'Lists',
      icon: <BsListStars size={32} />,
      url: '/',
    },
    {
      title: 'Subscriptions',
      icon: <MdSubscriptions size={32} />,
      url: '/',
    },
    {
      title: 'Add Card',
      icon: <BsCreditCard size={32} />,
      url: '/',
    },
    {
      title: 'My Profile',
      icon: <CgProfile size={32} />,
      url: '/',
    },
    {
      title: 'More',
      icon: <CgMoreO size={32} />,
      url: '/',
    },
  ];

  return (
    <nav className={className}>
      <Link to="/" className={`${className}__item ${className}__avatar`}>
        <span className={`${className}__icon`}>
          <Sidebar />
        </span>
      </Link>
      {listItems.map((item, index) => {
        return (
          <Link
            to={item.url}
            className={`${className}__item ${active === index ? 'header__active' : ''}`}
          >
            <span className={`${className}__icon`}>{item.icon}</span>
            <span className={`${className}__text`}>{item.title}</span>
          </Link>
        );
      })}
      <Link to={'/create-post'}
        className={`${className}__item `}
        style={{
          backgroundColor: '#00aff0',
          color: '#fff',
          borderRadius: '1000px',
          cursor: 'pointer',
        }}
        
      >
        <span className={`${className}__icon`}>
          <AddIcon />
        </span>
        <span className={`${className}__text`}>New Post</span>
      </Link>
      {/* <Button
        variant="contained"
        fullWidth
        startIcon={<AddIcon />}
        sx={{ borderRadius: '1000px', mt: 1, height: '48px' }}
      >
        New Post
      </Button> */}
    </nav>
  );
};
