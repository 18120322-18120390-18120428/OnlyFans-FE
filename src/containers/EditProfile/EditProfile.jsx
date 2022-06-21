import React from 'react';
import './EditProfile.scss';

import { EditUser } from '../../components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IconButton } from '@mui/material';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const EditProfile = () => {
  const className = 'edit-profile';
  const navigate = useNavigate();
  const account = useSelector((state) => state.userSlice.account);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div class={className}>
      <div className={`${className}__header`}>
        <div className={`${className}__left`}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={handleGoBack}
          >
            <AiOutlineArrowLeft color="#000" />
          </IconButton>
        </div>
        <div className={`${className}__right`}>
          <span className={`${className}__title`}>Edit Profile</span>
        </div>
      </div>

      <div className={`${className}__container`}>
        <EditUser account={account} />
      </div>
    </div>
  );
};
