import React, { Component } from 'react';
import Toolbar from './Toolbar';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <main>
          <p>mainpage content</p>
        </main>
      </div>
    );
  }
}

export default App;