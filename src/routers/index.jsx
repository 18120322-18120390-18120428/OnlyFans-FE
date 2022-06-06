import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderFooterLayout, BlankLayout } from '../layouts';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';

import { Header, Footer } from '../components';
import { Home, Login } from '../containers';

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
      </Routes>
    </BrowserRouter>
  );
};
