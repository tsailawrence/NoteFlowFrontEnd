import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import jwt_decode from 'jwt-decode';
// import "./Register.scss";
import instance from '../../API/api';
import { SHA256 } from 'crypto-js';
import { useParams } from '../../hooks/useParams';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';

const Register = () => {
  const { user, refetchFromLocalStorage } = useApp(); // user 是 google 回傳的 object, 可以拿去 render profile 頁面
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordHashed = SHA256(password).toString();
    const checkPasswordHashed = SHA256(checkPassword).toString();
    const request = {
      user: {
        name: name,
        email: email,
        password: passwordHashed,
      },
    };
    if (passwordHashed !== checkPasswordHashed) {
      alert('Wrong password');
    }
    instance
      .post('/user/register', request)
      .then((res) => {
        console.log(res.data);
        refetchFromLocalStorage();
        navigateTo('/home');
      })
      .catch((e) => {
        console.log('Login error');
      });

    //
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <div className='logo'>
          <img src='assets/logo.png' alt='' width='190' height='190' />
          <h1>NoteFlow</h1>
        </div>
        <div className='info'>
          <h2>Register</h2>
          <div className='infoContainer'>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              style={{ margin: '10px 15px' }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='name'
                label='Name'
                name='name'
                autoComplete='name'
                autoFocus
                size='small'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                size='small'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                size='small'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Check Password'
                type='password'
                id='check-password'
                autoComplete='current-password'
                size='small'
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  width: '100%',
                }}
              >
                <Button
                  type='submit'
                  variant='contained'
                  sx={{ mt: 2, mb: 2, width: '45%' }}
                  style={{ backgroundColor: 'white', color: 'black' }}
                  onClick={() => navigateTo('/')}
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  sx={{ mt: 2, mb: 2, width: '45%' }}
                  style={{ backgroundColor: '#0e1111' }}
                >
                  Register
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Register };
