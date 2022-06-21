import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getInfo } from '../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export const PublicRouter = ({
  component: Component,
  layout: Layout,
  header: Header,
  footer: Footer,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [isFetch, setIsFectch] = useState(false);
  const isAccount = useSelector((state) => state.userSlice.isAccount);

  useEffect(() => {
    const fecthInfo = async () => {
      const check = (await dispatch(getInfo())).payload;

      if (
        check === true ||
        check === false ||
        String(typeof check) === 'object' ||
        check === undefined
      ) {
        setIsFectch(true);
      }
    };

    fecthInfo();
  }, [location, dispatch]);

  const renderLayout = () => {
    if (!isFetch) {
      return <CircularProgress color="secondary" />;
    }

    if (isAccount) {
      navigate('/');
    }

    return <Layout header={<Header />} children={<Component />} footer={<Footer />} />;
  };

  return renderLayout();
};
