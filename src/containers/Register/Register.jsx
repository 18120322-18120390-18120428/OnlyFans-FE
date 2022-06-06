import React, { useState } from 'react';
import './Register.scss';

import { Link } from 'react-router-dom';
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

export const Register = () => {
  const className = 'register';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  console.log(email, password);

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
                  Register
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={name}
                    autoComplete="name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
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
                    Register
                  </Button>
                  <Grid>
                    <div className={`${className}__issues`}>
                      By signing up you agree to our <br />
                      <Link to="/"> Terms of Service</Link> and
                      <Link to=""> Privacy Policy</Link> , and confirm that you are at least 18
                      years old.
                    </div>
                  </Grid>
                  <Grid className={`${className}__login`}>
                    <span>
                      {' '}
                      Already have an account?
                      <Link to="/"> Login</Link>
                    </span>
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
