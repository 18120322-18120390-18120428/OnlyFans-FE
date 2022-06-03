import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderFooterLayout, BlankLayout } from "../layouts";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";

import { Header, Footer } from "../components";
import { Home, Login } from "../containers";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          exact={true}
          path={"/"}
          element={
            <PrivateRouter
              component={Home}
              layout={HeaderFooterLayout}
              header={Header}
              footer={Footer}
              sidebar={Sidebar}
              page={PageBreadcrumb}
              title="Quản lý tài khoản"
            />
          }
        /> */}
        <Route
          exact={true}
          path={"/login"}
          element={<PublicRouter component={Login} layout={BlankLayout} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
