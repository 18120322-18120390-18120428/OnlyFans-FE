import React, { useContext } from 'react';

import { Box, Button, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { ConnectWalletModal } from '../ConnectWalletModal/ConnectWalletModal';
import { toast } from 'react-toastify';
import walletApi from '../../services/walletApi';
import WalletContext from '../../contexts/WalletContext';

export const Subscribe = ({ subscriberId, idolId, checkSubscribe, setIsSubscribe, infoUser }) => {
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

  const handleSubscribe = async (amount, licenseType, lifeTime) => {
    console.log('aa');
    if (wallet.account) {
      try {
        const receiver = await walletApi.getOneByHolderId(idolId);

        const res = await wallet.addNewSubscribe(
          receiver.data.wallet.walletAddress,
          subscriberId,
          idolId,
          amount,
          licenseType,
          lifeTime,
        );
        console.log(res);
        if (res !== false) {
          toast.success(`Successful subscription, now you can see their posts`, {
            position: 'bottom-left',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          checkSubscribe(subscriberId, idolId);
        }
      } catch (error) {
        console.log(error);
      }
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
          onClick={() => handleSubscribe(infoUser.amount,infoUser.amount ?  1 : 0, 1)}
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
            <Typography sx={{ textTransform: 'uppercase', fontSize: '14px' }}>
              {infoUser.amount !== 0 ? `${infoUser.amount} ETH per 30 days` : 'For Free'}
            </Typography>
          </Box>
        </Button>
        {infoUser.amount !== 0 ? (
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
                onClick={()=>{handleSubscribe(
                  ((infoUser.amount * 0.8 * 100 * 3) / 100).toFixed(4),
                  1,
                  3,
                )}}
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
                    90 days (20%
                    <span
                      style={{ textTransform: 'lowercase', fontSize: '14px', marginLeft: '4px' }}
                    >
                      off
                    </span>
                    )
                  </Typography>
                  <Typography sx={{ textTransform: 'uppercase', fontSize: '14px' }}>
                    {((infoUser.amount * 0.8 * 100 * 3) / 100).toFixed(4)} ETH total
                  </Typography>
                </Box>
              </Button>
              <Button
                onClick={()=>{handleSubscribe(((infoUser.amount * 0.65 * 100 * 6) / 100).toFixed(4), 1, 6)}}
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
                    180 days (35%
                    <span
                      style={{ textTransform: 'lowercase', fontSize: '14px', marginLeft: '4px' }}
                    >
                      off
                    </span>
                    )
                  </Typography>
                  <Typography sx={{ textTransform: 'uppercase', fontSize: '14px' }}>
                    {((infoUser.amount * 0.65 * 100 * 6) / 100).toFixed(4)} ETH total
                  </Typography>
                </Box>
              </Button>
            </AccordionDetails>
          </Accordion>
        ) : (
          <></>
        )}
        <ConnectWalletModal
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          connectWallet={wallet.connectWallet}
          infoUser={infoUser}
        />
      </Box>
    </>
  );
};
