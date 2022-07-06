import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getInfo } from '../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

export const PrivateRouter = ({
  component: Component,
  layout: Layout,
  header: Header,
  footer: Footer,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [isFetch, setIsFetch] = useState(false);
  const isAccount = useSelector((state) => state.userSlice.isAccount);

  useEffect(() => {
    const fetchInfo = async () => {
      const check = (await dispatch(getInfo())).payload;

      if (
        check === true ||
        check === false ||
        String(typeof check) === 'object' ||
        check === undefined
      ) {
        setIsFetch(true);
      }

      return;
    };

    fetchInfo();
  }, [location, dispatch]);

  const renderLayout = () => {
    if (!isFetch) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress color="secondary" />
        </Box>
      );
    }

    if (!isAccount) {
      navigate('/login');
    }

    return <Layout header={<Header />} children={<Component />} footer={<Footer />} />;
  };

  return renderLayout();
};
