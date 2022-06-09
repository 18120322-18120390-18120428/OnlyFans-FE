import React from 'react';
import './ListUsers.scss';

import { Link } from 'react-router-dom';

import { Avatar } from '@mui/material';

export const ListUsers = () => {
  const className = 'list-users';
  const listUsers = [
    {
      backgroup:
        'https://public.onlyfans.com/files/thumbs/w480/n/n3/n3e/n3e7yhwzkfsywynng0b7w0byild2pma81643244011/header.jpg',
      avatar:
        'https://public.onlyfans.com/files/thumbs/c144/r/rb/rbx/rbxqzp6dz7hwf2bxuytqcfdegbaerlpq1643244010/avatar.jpg',
      price: 0,
      name: 'Weirdtwinthing',
      nickName: '@weirdtwinthing',
    },
    {
      backgroup:
        'https://public.onlyfans.com/files/thumbs/w480/n/n3/n3e/n3e7yhwzkfsywynng0b7w0byild2pma81643244011/header.jpg',
      avatar:
        'https://public.onlyfans.com/files/thumbs/c144/r/rb/rbx/rbxqzp6dz7hwf2bxuytqcfdegbaerlpq1643244010/avatar.jpg',
      price: 0,
      name: 'Weirdtwinthing',
      nickName: '@weirdtwinthing',
    },
    {
      backgroup:
        'https://public.onlyfans.com/files/thumbs/w480/n/n3/n3e/n3e7yhwzkfsywynng0b7w0byild2pma81643244011/header.jpg',
      avatar:
        'https://public.onlyfans.com/files/thumbs/c144/r/rb/rbx/rbxqzp6dz7hwf2bxuytqcfdegbaerlpq1643244010/avatar.jpg',
      price: 0,
      name: 'Weirdtwinthing',
      nickName: '@weirdtwinthing',
    },
  ];

  return (
    <div className={className}>
      <div className={`${className}__container`}>
        <div className={`${className}__content`}>
          {listUsers.length !== 0 &&
            listUsers.map((item, index) => {
              return (
                <div className={`${className}__item`} key={index}>
                  <div className={`${className}__body`}>
                    <Link to="/" className={`${className}__link`}>
                      <div className={`${className}__backgroup`}>
                        <img src={item.backgroup} alt={item.name} className={`${className}__img`} />
                      </div>
                      <div className={`${className}__free`}>
                        {item.price === 0 ? 'Free' : item.price}
                      </div>
                      <div className={`${className}__user`}>
                        <div className={`${className}__avatar`}>
                          <Avatar
                            alt={item.name}
                            src={item.avatar}
                            sx={{ width: '96px', height: '96px' }}
                          />
                        </div>
                        <div className={`${className}__name`}>
                          <div className={`${className}__user-name`}>{item.name}</div>
                        </div>
                        <div className={`${className}__name`}>
                          <div className={`${className}__user-name`} style={{ fontSize: '14px' }}>
                            {item.nickName}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
