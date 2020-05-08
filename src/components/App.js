import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import Lookbook from './Lookbook';
import Contact from './Contact';
import About from './About';
import Checkout from './Checkout';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/lookbook" component={Lookbook} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;