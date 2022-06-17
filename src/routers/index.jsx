import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderFooterLayout, BlankLayout } from '../layouts';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';

import { Header, Footer } from '../components';
import { Home, Login, PersonalInfo, Register, CreatePost } from '../containers';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact={true}
          path={'/'}
          element={
            <PrivateRouter
              component={Home}
              layout={HeaderFooterLayout}
              header={Header}
              footer={Footer}
            />
          }
        />
        <Route
          exact={true}
          path={'/login'}
          element={<PublicRouter component={Login} layout={BlankLayout} />}
        />
        <Route
          exact={true}
          path={'/register'}
          element={<PublicRouter component={Register} layout={BlankLayout} />}
        />
        <Route
          exact={true}
          path={'/:id'}
          element={
            <PrivateRouter
              component={PersonalInfo}
              layout={HeaderFooterLayout}
              header={Header}
              footer={Footer}
            />
          }
        />
        <Route
          exact={true}
          path={'/create-post'}
          element={
            <PrivateRouter
              component={CreatePost}
              layout={HeaderFooterLayout}
              header={Header}
              footer={Footer}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
