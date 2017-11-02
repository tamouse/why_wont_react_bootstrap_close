import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EditDropdown from './components/EditDropdown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Why won't react bootstrap close?</h1>
        </header>
        <p className="App-intro">
          This demonstrates the react-bootstrap behaviour. When the dropdown item is selected, the caret is still focused. Contrast with Plain Old Bootstrap below.
        </p>
        <EditDropdown/>
      </div>
    );
  }
}

export default App;
