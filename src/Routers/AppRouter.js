import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Containers/Header'
import Home from '../Containers/Home'
import About from '../Containers/About'
import Footer from '../Containers/Footer'

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Route path='/' component={Header} />
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/' component={Footer} />
          </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;