import React, { useState, useEffect } from 'react';
import './Home.scss';

import { CreatePost, PostCard } from '../../components';

export const Home = () => {
  return (
    <>
      <CreatePost />
      <PostCard />
      <PostCard />
    </>
  );
};
