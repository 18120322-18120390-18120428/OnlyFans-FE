import React, { useState, useEffect } from 'react';
import './Home.scss';

import { PostForm, PostCard } from '../../components';

export const Home = () => {
  return (
    <>
      <PostForm />
      <PostCard />
      <PostCard />
    </>
  );
};
