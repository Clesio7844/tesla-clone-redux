import React, { useState } from 'react';

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

function App() {
  const [isMenuOpen, SetisMenuOpen] = useState(false);

  return (
    <Router>
      <div className='app'>
        <Header isMenuOpen={isMenuOpen} SetisMenuOpen={SetisMenuOpen} />
        {isMenuOpen && <Menu />}
        <HeaderBlock />
      </div>
    </Router>
  );
}

export default App;
