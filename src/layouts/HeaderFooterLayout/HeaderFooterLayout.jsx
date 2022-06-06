import React from 'react';
import './HeaderFooterLayout.scss';

export const HeaderFooterLayout = ({ header, children, footer }) => {
  return (
    <div className="header-footer">
      <div className="header-footer__container">
        <div className="header-footer__header">{header}</div>
        <div className="header-footer__body">
          <div className="header-footer__content">
            <div className="header-footer__main">{children}</div>
            <div className="header-footer__footer">{footer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
