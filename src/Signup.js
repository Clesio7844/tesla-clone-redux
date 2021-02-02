import React, { useState } from 'react';
import './Signup.css';
import { Link, useHistory } from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Language';
import { useDispatch } from 'react-redux';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { auth } from './firebase';
import { login } from './features/userSlice';

function Signup() {
  const [email, setemail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = e => {
    e.preventDefault();

    if (!firstName) {
      return alert('Please enter a first name!');
    }
    if (!lastName) {
      return alert('Please enter a last name!');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user
          .updateProfile({
            displayName: firstName
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: firstName
              })
            );

            history.push('/teslaaccount');
          });
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='signup'>
      <div className='signup__header'>
        <div className='signup__logo'>
          <Link>
            <img
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt='tesla logo'
            />
          </Link>
        </div>
        <div className='signup__language'>
          <LanguageIcon /> <span>en-US</span>
        </div>
      </div>
      <div className='signup__info'>
        <h1>Create Account In</h1>
        <form className='signup__form'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
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
          <ButtonPrimary
            name='create account'
            type='submint'
            onClick={signUp}
          />
        </form>
        <div className='login__divider'>
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to='/login'>
          <ButtonSecondary name='sign in' />
        </Link>
      </div>
    </div>
  );
}

export default Signup;
