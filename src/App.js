import React, { useState } from 'react';

import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  const [isMenuOpen, SetisMenuOpen] = useState(false);

  return (
    <Router>
      <div className='app'>
        <Header isMenuOpen={isMenuOpen} SetisMenuOpen={SetisMenuOpen} />
        {/* header */}
        {/* headerBlock */}
      </div>
    </Router>
  );
}

export default App;
