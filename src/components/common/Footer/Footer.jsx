import React from 'react';
import './Footer.scss';

import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Link } from 'react-router-dom';
import { ListUsers } from '../../ListUsers/ListUsers';

export const Footer = () => {
  const className = 'footer';
  return (
    <div className={className}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', border: '1px solid #8a96a3' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <div className={`${className}__container`}>
        <div className={`${className}__content`}>
          <div className={`${className}__header`}>
            <h2 className={`${className}__title`}>SUGGESTIONS</h2>
            <div className={`${className}__btn`}>
              <IconButton aria-label="free">
                <CreditCardOffIcon />
              </IconButton>
              <IconButton aria-label="refresh">
                <AutorenewIcon />
              </IconButton>
              <IconButton aria-label="refresh">
                <KeyboardArrowLeftIcon />
              </IconButton>
              <IconButton aria-label="refresh">
                <ChevronRightIcon />
              </IconButton>
            </div>
          </div>
          <ListUsers />
        </div>
      </div>

      <div className={`${className}__end`}>
        <nav className={`${className}__end-content`}>
          <Link to="/" target="_blank" className={`${className}__item`}>
            Privacy
          </Link>
          <Link to="/" target="_blank" className={`${className}__item`}>
            Terms of Service
          </Link>
          <Link to="/" target="_blank" className={`${className}__item`}>
            Cookie Notice
          </Link>
        </nav>
      </div>
    </div>
  );
};
