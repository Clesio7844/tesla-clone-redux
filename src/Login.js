import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Language';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const signIn = e => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <div className='login__header'>
        <div className='login__logo'>
          <Link>
            <img
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt='tesla logo'
            />
          </Link>
        </div>
        <div className='login__language'>
          <LanguageIcon /> <span>en-US</span>
        </div>
      </div>
      <div className='login__info'>
        <h1>Sign In</h1>
        <form className='login__form'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={e => setemail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={e => setpassword(e.target.value)}
          />
          <ButtonPrimary name='Sign In' type='submint' onClick={signIn} />
        </form>
        <div className='login__divider'>
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to='/signup'>
          <ButtonSecondary name='create account' />
        </Link>
      </div>
    </div>
  );
}

export default Login;
