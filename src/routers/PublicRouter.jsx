import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRouter = ({
  component: Component,
  layout: Layout,
  header: Header,
  footer: Footer,
  sidebar: Sidebar,
  page: Page,
  title,
}) => {
  const isAccount = useSelector((state) => state.userSlice.isAccount);

  if (!isAccount) {
    return (
      <Layout
        sidebar={<Sidebar />}
        header={<Header />}
        children={<Component />}
        footer={<Footer />}
        page={<Page title={title} />}
      />
    );
  }

  return <Navigate to="/" replace />;
};
