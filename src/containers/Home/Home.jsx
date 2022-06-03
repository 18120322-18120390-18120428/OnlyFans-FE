import React, { useState, useEffect } from 'react';
import './Home.scss';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Fab from '@mui/material/Fab';
import KeyIcon from '@mui/icons-material/Key';
import KeyOffIcon from '@mui/icons-material/KeyOff';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import manageUserApi from '../../services/manageUserApi';
import { toast } from 'react-toastify';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const Home = () => {
  const [listUser, setListUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const getListUser = async (number, page) => {
    const listUser = await manageUserApi.getAllUser({ number: number, page: page * 10 });
    setListUser(listUser.data);
  };

  const getTotalPage = async () => {
    const totalPage = await manageUserApi.getAllUser({ number: 0, page: 0 });
    setTotalPage(totalPage.data.length);
  };

  useEffect(() => {
    getListUser(10, currentPage);
  }, [currentPage]);

  useEffect(() => {
    getTotalPage();
  }, []);

  const handlePagination = (event, value) => {
    setCurrentPage(value - 1);
  };

  const handleBlock = async (_id, status, id) => {
    const dataUpdate = {
      isActive: !status,
    };

    const statusUpdate = await manageUserApi.updateAccount({ _id: _id, dataUpdate: dataUpdate });

    if (statusUpdate.data.data) {
      toast.success('Cập nhật tài khoản thành công!!!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      const listUserTemp = listUser;
      listUserTemp[id].isActive = !status;
      setListUser([...[], ...listUserTemp]);
    } else {
      toast.warn('Cập nhật tài khoản thất bại!!!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">STT</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Họ Tên</StyledTableCell>
              <StyledTableCell align="center">Loại Tài Khoản</StyledTableCell>
              <StyledTableCell align="center">Chức Năng</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listUser.length !== 0 &&
              listUser.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">{currentPage * 10 + index + 1}</StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">{row.fullname}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.type === 'tutor' ? 'Gia Sư' : 'Học Viên'}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="block"
                      sx={{ marginRight: '4px' }}
                      onClick={() => handleBlock(row._id, row.isActive, index)}
                    >
                      {row.isActive ? <KeyIcon /> : <KeyOffIcon />}
                    </Fab>
                    <Fab size="small" color="primary" aria-label="up">
                      {row.type === 'tutor' ? <ArrowCircleDownIcon /> : <ArrowCircleUpIcon />}
                    </Fab>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {totalPage !== 0 && (
        <div className="home__pagination">
          <Pagination
            count={(totalPage - (totalPage % 10)) / 10}
            page={currentPage + 1}
            variant="outlined"
            color="primary"
            onChange={handlePagination}
          />
        </div>
      )}
    </>
  );
};
