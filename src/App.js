import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from Class Component (App)</h1>
        <FunctionComponent /> {/* Umetnite komponentu definiranu funkcijom ovdje */}
      </div>
    );
  }
}

export default App
