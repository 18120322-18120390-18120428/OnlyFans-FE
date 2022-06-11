import React, { useState, useEffect } from 'react';
import './Home.scss';

import { PostForm, PostCard } from '../../components';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Link to={'/create-post'}>
        <PostForm />
      </Link>
      <PostCard />
      <PostCard />
    </>
  );
};
