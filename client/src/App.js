import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { SB1 } from './components/pages/SB1';

// Bring in Provider
import { SB1Provider } from './context/sb1/SB1State';

function App() {
  return (
    <SB1Provider>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={SB1} />
            </Switch>
          </div>
        </div>
      </Router>
    </SB1Provider>
  );
}

export default App;
