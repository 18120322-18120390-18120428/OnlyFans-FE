import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderFooterLayout, BlankLayout } from '../layouts';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';

import { Header, Footer } from '../components';
import { Home, Login, PersonalInfo, Register } from '../containers';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact={true}
          path={'/'}
          element={
            <PublicRouter
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
          path={'/info'}
          element={
            <PublicRouter component={PersonalInfo} layout={BlankLayout} title="Trang cá nhân" />
          }
        />
        {/* <Route
          exact={true}
          path={'/create-post'}
          element={
            <PublicRouter component={CreatePost} layout={BlankLayout} title="Tạo bài viết" />
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};
