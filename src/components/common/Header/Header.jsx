import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const className = 'header';
  const account = useSelector((state) => state.userSlice.account);

  console.log(account);

  return (
    <header className={className}>
      <nav className={`${className}__content`}>
        <div className={`${className}__left`}>
          <Link to="/" className={`${className}__logo`}>
            <span>
              <img src="https://www.cambly.com/fe/static/logos/sm/primary.png" alt="Logo Text" />
            </span>
          </Link>
        </div>

        <div className={`${className}__right`}>
          <ul className={`${className}__user`}>
            <li className={`${className}__item`}>
              <div className={`${className}__profile`}>
                {account.Image ? (
                  <img src={account.Image} alt="User" />
                ) : (
                  <i className="fa-solid fa-user" style={{ marginRight: '8px' }} />
                )}

                {account.Name}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
