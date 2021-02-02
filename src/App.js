import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectuser, login, logout } from './features/userSlice';
import Signup from './Signup';
import TeslaAccount from './TeslaAccount';
import { auth } from './firebase';

function App() {
  const [isMenuOpen, SetisMenuOpen] = useState(false);
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is sign in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName
          })
        );
      } else {
        // user is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/teslaaccount'>
            {!user ? (
              <Redirect to='/login' />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  SetisMenuOpen={SetisMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            {user ? <Redirect to='/teslaaccount' /> : <Login />}
          </Route>
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} SetisMenuOpen={SetisMenuOpen} />
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
