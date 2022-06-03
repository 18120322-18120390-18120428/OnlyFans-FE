import React from 'react';
import './HeaderFooterLayout.scss';

export const HeaderFooterLayout = ({ sidebar, header, children, footer, page }) => {
  return (
    <div className="header-footer">
      <div className="header-layout">{header}</div>
      <aside className="sidebar-layout">{sidebar}</aside>
      <div className="children-layout">
        <div className="page-breadcrumb-layout">{page}</div>
        <div className="children-content">{children}</div>
        <footer className="footer-layout">{footer}</footer>
      </div>
    </div>
  );
};
