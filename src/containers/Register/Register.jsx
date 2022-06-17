import React, { useState } from 'react';
import './Register.scss';

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
  FormHelperText,
} from '@mui/material';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import userApi from '../../services/userAxios';

export const Register = () => {
  const className = 'register';
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập email'),
    name: Yup.string()
      .min(3, 'Tối thiểu 2 ký tự')
      .max(100, 'Tối đa 100 ký tự')
      .required('Vui lòng nhập họ tên'),
    password: Yup.string()
      .required('Vui lòng nhập mật khẩu')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'The password must contain at least 1 number, at least 1 lower case latin letter, and at least 1 upper case latin letter',
      ),
  });

  const handleNotice = (error) => {
    if (error.message === 'Register user by email failed: Email đã tồn tại') {
      toast.error('Email đăng ký đã tồn tại', {
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

    toast.error('Email đăng ký đã tồn tại', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return;
  };
  const onSubmit = async (values) => {
    toast('Đang xử lý', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(values);

    try {
      const res = await userApi.register(values);
      console.log('res: ', res);
      if (res) {
        toast.success('Đăng ký tài khoản thành công', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/login');

        return;
      }
    } catch (error) {
      console.log(error);
      setTimeout(handleNotice(error), 2500);
    }
  };
  return (
    <div className={className}>
      <div className={`${className}__container`}>
        <div className={`${className}__content`}>
          <div className={`${className}__col`}>
            <div className={`${className}__body`}>
              <h1 className={`${className}__logo`}>
                <PhotoCameraIcon fontSize="20" sx={{ color: '#fff', paddingRight: '8px' }} />
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
                  alignItems: 'flex-start',
                }}
              >
                <Typography component="h1" variant="h5" sx={{ fontSize: '14px', fontWeight: 600 }}>
                  Create your account
                </Typography>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    password: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log('hehe');
                    onSubmit(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Box sx={{ mt: 1 }} onSubmit={handleSubmit} component="form">
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        value={values.name}
                        autoComplete="name"
                        onBlur={handleBlur}
                        autoFocus
                        onChange={handleChange}
                      />
                      {errors.name && touched.name && (
                        <FormHelperText error id="outlined-name">
                          {errors.name}
                        </FormHelperText>
                      )}
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        value={values.email}
                        autoComplete="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {errors.email && touched.email && (
                        <FormHelperText error id="outlined-email">
                          {errors.email}
                        </FormHelperText>
                      )}
                      <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
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
                      {errors.password && touched.password && (
                        <FormHelperText error id="outlined-password">
                          {errors.password}
                        </FormHelperText>
                      )}
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={
                          values.name === '' || errors.password || errors.name || errors.email
                        }
                        sx={{ mt: 2, mb: 2, borderRadius: '1000px' }}
                      >
                        SIGN UP
                      </Button>
                      <Grid>
                        <div className={`${className}__issues`}>
                          By signing up you agree to our <br />
                          <Link to="#"> Terms of Service</Link> and
                          <Link to="#"> Privacy Policy</Link> , and confirm that you are at least 18
                          years old.
                        </div>
                      </Grid>
                      <Grid className={`${className}__login`}>
                        <span>
                          Already have an account?
                          <Link to="/login"> Login</Link>
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
                  )}
                </Formik>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
