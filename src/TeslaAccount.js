import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './TeslaAccount.css';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { selectuser, logout } from './features/userSlice';

import Car from './Car';
import { auth } from './firebase';

function TeslaAccount({ isMenuOpen, SetisMenuOpen }) {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push('/');
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='teslaAccount'>
      <div className='teslaAccount__header'>
        <div className='teslaAccount__logo'>
          <Link to='/'>
            <img
              className='header__logoImg'
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt='tesla logo'
            />
          </Link>
        </div>
        <div className='teslaAccount__links'>
          <Link to='/teslaAccount'>Model S</Link>
          <Link to='/teslaAccount'>Model 3</Link>
          <Link to='/teslaAccount'>Model X</Link>
          <Link to='/teslaAccount'>Model Y</Link>
          <Link to='/teslaAccount'>Solar Roof</Link>
          <Link to='/teslaAccount'>Solar Panels</Link>
          <Link to='/teslaAccount'>Shop</Link>
          <Link to='/teslaAccount'>Tesla Account</Link>
          <Link onClick={logoutOfApp}>Log out</Link>
          <div
            className='teslaAccount__menu'
            onClick={() => SetisMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className='teslaAccoun__closeMenu' />
            ) : (
              <MenuIcon />
            )}
          </div>
        </div>
      </div>
      <div className='teslaaccount__info'>
        <div className='teslaaccount__person'>
          <h4>{user?.displayName + "'s"} Tesla</h4>
        </div>
        <div className='teslaaccount__infoRight'>
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logoutOfApp}>Sign out</Link>
        </div>
      </div>
      <div className='teslaaccount__car'>
        <Car
          imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815'
          model='model s'
          testDrive
        />
        <Car
          imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815'
          model='model x'
        />
      </div>
    </div>
  );
}

export default TeslaAccount;
