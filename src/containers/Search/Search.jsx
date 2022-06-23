import React, { useEffect, useState } from 'react';
import './Search.scss';

import { Stack, Pagination, Divider, Alert } from '@mui/material';

import { ItemSearch, BoxSearch } from '../../components';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import userApi from '../../services/userApi';

export const Search = () => {
  const className = 'search';
  const params = useParams();
  const { query } = params;
  const [listUsers, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const getListUsersByQuery = async (query, number, page) => {
    try {
      const listUsersSearch = await userApi.searchUser({ query, number, page });
      setListUsers(listUsersSearch.data);
    } catch (error) {
      toast.error('Search Failed', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const getToatlPage = async (query, number, page) => {
    try {
      const listUsersSearch = await userApi.searchUser({ query, number, page });
      setTotalPage(listUsersSearch.data.length);
    } catch (error) {
      toast.error('Search Failed', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handlePagination = (event, value) => {
    setCurrentPage(value - 1);
  };

  useEffect(() => {
    getListUsersByQuery(query, 10, currentPage * 10);
  }, [currentPage, query]);

  useEffect(() => {
    getToatlPage(query, 0, 0);
  }, [query]);

  return (
    <div className={className}>
      <div className={`${className}__header`}>
        <BoxSearch />
      </div>

      <div className={`${className}__container`}>
        {listUsers.length !== 0 ? (
          listUsers.map((user) => {
            return <ItemSearch avatar={user.avatar} name={user.name} nickName={user.nickName} />;
          })
        ) : (
          <Alert severity="error" sx={{ marginTop: '14px' }}>
            Couldn't find an account related to the keyword <b> "{query}"</b>
          </Alert>
        )}
      </div>
      {listUsers.length !== 0 && totalPage > 10 && (
        <>
          <Divider sx={{ margin: '0 -16px' }} />
          <div className={`${className}__pagination`}>
            <Stack spacing={2}>
              <Pagination
                count={(totalPage - (totalPage % 10)) / 10}
                page={currentPage + 1}
                variant="outlined"
                color="primary"
                onChange={handlePagination}
              />
            </Stack>
          </div>
        </>
      )}
    </div>
  );
};
