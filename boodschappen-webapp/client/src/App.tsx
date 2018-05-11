import * as React from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Boodschappen from './Boodschappen';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Please login to continue</h1>
        </header>
        <div className="container">          
          <Boodschappen />
        </div>
      </div>
    );
  }
}

export default App;
