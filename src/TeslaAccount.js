import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './TeslaAccount.css';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

function TeslaAccount({ isMenuOpen, setIsMenuOpen }) {
  const logoutOfApp = () => {};

  return (
    <div className='teslaAccount'>
      <div className='teslaAccount__header'>
        <div className='teslaAccount logo'>
          <Link>
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeslaAccount;
