import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

export const Footer = () => {
  const className = 'footer';

  return (
    <>
      © 2022 Nhóm 01 - Bộ môn Đồ án công nghệ phần mềm 18_3 - Copyright by 
      <Link to="/" className={`${className}__link`}> Cambly</Link>
    </>
  );
};
