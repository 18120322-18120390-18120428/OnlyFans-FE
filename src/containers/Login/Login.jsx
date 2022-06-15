import React, { useState } from 'react';
import './Login.scss';

import { Link, useNavigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import GoogleIcon from '@mui/icons-material/Google';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import userApi from '../../services/userAxios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login, userSlice } from '../../redux/slice/userSlice';
export const Login = () => {
  const className = 'login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async(event) => {
    event.preventDefault();
    const values = {
      email: email,
      password: password,
    };
    try {
      const test = (await dispatch(login(values))).payload; 
      console.log(test);
      const res = await userApi.login(values);
      console.log(res);
      if (res) {
        toast.success('Login success', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/');
        return;
      }
    } catch (error) {
      toast.error('Username or password is incorrect !', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  };

  return (
    <div className={className}>
      <div className={`${className}__container`}>
        <div className={`${className}__content`}>
          <div className={`${className}__col`}>
            <div className={`${className}__body`}>
              <h1 className={`${className}__logo`}>
                <PhotoCameraIcon fontSize="20" sx={{ color: '#fff', paddingRight: '8px' }} />{' '}
                OnlyFans
              </h1>
              <h2 className={`${className}__text`}>Sign up to support your favorite creators</h2>
            </div>
          </div>
          <div className={`${className}__col`}>
            <div className={`${className}__body`}>
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={email}
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={email && password ? false : true}
                    sx={{ mt: 2, mb: 2, borderRadius: '1000px' }}
                  >
                    Login
                  </Button>
                  <Grid container sx={{ mt: 3, mb: 3 }}>
                    <Grid item xs>
                      <Link to="#" variant="body2" className={`${className}__link`}>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="#" variant="body2" className={`${className}__link`}>
                        {' Sign up for OnlyFans '}
                      </Link>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<TwitterIcon />}
                    sx={{ borderRadius: '1000px', padding: '10px 0', mt: 2 }}
                  >
                    Sign in with twitter
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    startIcon={<GoogleIcon />}
                    sx={{ borderRadius: '1000px', padding: '10px 0', mt: 2 }}
                  >
                    Sign in with google
                  </Button>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
