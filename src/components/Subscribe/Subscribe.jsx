import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ConnectWalletModal } from '../ConnectWalletModal/ConnectWalletModal';
import WalletContext from '../../contexts/WalletContext';
import { useContext } from 'react';

export const Subscribe = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(0);
  const wallet = useContext(WalletContext);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const handleSubscribe = () => {
    console.log(wallet);
    if (wallet.account) {
      wallet.addFunds();
    } else {
      handleClickOpen();
    }
  };
  return (
    <>
      <Box sx={{ backgroundColor: '#fff', padding: '0 16px' }}>
        <Typography
          sx={{ color: '#8a96a3', fontSize: '16px', paddingTop: '10px', fontWeight: 500 }}
        >
          SUBCRIPTION
        </Typography>
        <Button
          onClick={handleSubscribe}
          sx={{
            width: '100%',
            backgroundColor: '#00aff0',
            borderRadius: '1000px',
            color: '#fff',
            fontSize: '13px',
            margin: '16px 0',
            '&:hover': {
              backgroundColor: '#00aff0',
              opacity: 0.7,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: 'inherit',
              padding: '5px 22px',
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>SUBSCRIBE </Typography>
            <Typography sx={{ textTransform: 'lowercase', fontSize: '14px' }}>
              $20 per month
            </Typography>
          </Box>
        </Button>
        <Accordion sx={{ boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ padding: '0 0 ' }}
          >
            <Typography
              sx={{ color: '#8a96a3', fontSize: '16px', paddingTop: '10px', fontWeight: 500 }}
            >
              SUBSCRIPTION BUNDLES
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '0 0 ' }}>
            <Button
              onClick={handleSubscribe}
              sx={{
                width: '100%',
                backgroundColor: '#00aff0',
                borderRadius: '1000px',
                color: '#fff',
                fontSize: '13px',
                margin: '16px 0',
                '&:hover': {
                  backgroundColor: '#00aff0',
                  opacity: 0.7,
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: 'inherit',
                  padding: '5px 22px',
                }}
              >
                <Typography sx={{ fontSize: '14px' }}>
                  3 MONTHS (20%
                  <span style={{ textTransform: 'lowercase', fontSize: '14px', marginLeft: '4px' }}>
                    off
                  </span>
                  )
                </Typography>
                <Typography sx={{ textTransform: 'lowercase', fontSize: '14px' }}>
                  $48 total
                </Typography>
              </Box>
            </Button>
            <Button
              onClick={handleSubscribe}
              sx={{
                width: '100%',
                backgroundColor: '#00aff0',
                borderRadius: '1000px',
                color: '#fff',
                fontSize: '13px',
                margin: '16px 0',
                '&:hover': {
                  backgroundColor: '#00aff0',
                  opacity: 0.7,
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: 'inherit',
                  padding: '5px 22px',
                }}
              >
                <Typography sx={{ fontSize: '14px' }}>
                  6 MONTHS (35%
                  <span style={{ textTransform: 'lowercase', fontSize: '14px', marginLeft: '4px' }}>
                    off
                  </span>
                  )
                </Typography>
                <Typography sx={{ textTransform: 'lowercase', fontSize: '14px' }}>
                  $78 total
                </Typography>
              </Box>
            </Button>
          </AccordionDetails>
        </Accordion>
        <ConnectWalletModal
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          connectWallet={wallet.connectWallet}
        />
      </Box>
    </>
  );
};
