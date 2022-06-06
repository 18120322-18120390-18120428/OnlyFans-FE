import React from 'react';
import './OnlyFooterLayout.scss';

export const OnlyFooterLayout = ({ footer, children }) => {
  return (
    <div className="only-footer">
      <div className="only-footer__center">{children}</div>
      <div className="only-footer__footer">{footer}</div>
    </div>
  );
};
