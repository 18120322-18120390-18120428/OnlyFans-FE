import React, { useState } from 'react';
import './EditUser.scss';

import {
  TextField,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import userApi from '../../services/userAxios';
import { toast } from 'react-toastify';

export const EditUser = ({ account }) => {
  const className = 'edit-user';
  const [expanded, setExpanded] = useState(false);
  const [nickName, setNickName] = useState(account.nickName || '');
  const [name, setName] = useState(account.name || '');
  const [job, setJob] = useState(account.job || '');
  const [amount, setAmount] = useState(account.amount || '');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleUpdateAmount = async () => {
    const dataUpdate = {
      amount: amount,
    };

    try {
      const statusUpdate = await userApi.updateUser({ _id: account._id, dataUpdate });

      if (statusUpdate.data) {
        toast.success('Update Amount Account Success', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error('Update Amount Account Failed', {
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

  return (
    <div className={className}>
      <div className={`${className}__input`}>
        <TextField
          id="userName"
          label="Username"
          fullWidth
          helperText={`http://localhost:3000/${account.nickName}`}
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
      </div>
      <div className={`${className}__input`}>
        <TextField
          id="name"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={`${className}__input`}>
        <TextField
          fullWidth
          label="Job"
          id="job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>
      <div className={`${className}__btn`}>
        <Button variant="contained" sx={{ borderRadius: '1000px' }}>
          Save
        </Button>
      </div>

      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{ borderTop: '12px solid var(--marked-color);' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0 }}>Subcription</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {amount === 0 ? 'Free' : amount}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <TextField
            id="price"
            label="Price per month"
            type="number"
            fullWidth
            helperText="Minimum $0 USD or free"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className={`${className}__btn`}>
            <Button
              variant="contained"
              sx={{ borderRadius: '1000px' }}
              onClick={handleUpdateAmount}
            >
              Save
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
