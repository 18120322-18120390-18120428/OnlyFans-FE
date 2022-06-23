import React, { useState } from 'react';
import './Header.scss';

import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { useSelector } from 'react-redux';

import { AiOutlineHome } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BiMessageSquareDetail, BiLogOutCircle } from 'react-icons/bi';
import { BsBookmark, BsListStars, BsCreditCard } from 'react-icons/bs';
import { MdSubscriptions } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import AddIcon from '@mui/icons-material/Add';

export const Header = () => {
  const className = 'header';
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const account = useSelector((state) => state.userSlice.account);

  const handleLogout = () => {
    localStorage.setItem('jwt', '');
    navigate('/login');
  };

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
      url: `/user/${account.nickName}`,
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
            onClick={() => setActive(index)}
          >
            <span className={`${className}__icon`}>{item.icon}</span>
            <span className={`${className}__text`}>{item.title}</span>
          </Link>
        );
      })}
      <Link to="/login" className={`${className}__item`} onClick={handleLogout}>
        <span className={`${className}__icon`}>
          <BiLogOutCircle size={32} />
        </span>
        <span className={`${className}__text`}>Logout</span>
      </Link>
      <Link
        to={'/create-post'}
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
    </nav>
  );
};
