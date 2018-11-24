import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Containers/Header'
import Home from '../Containers/Home'
import About from '../Containers/About'
import Workshops from '../Containers/Workshops'
import Events from '../Containers/Events'
import Contacts from '../Containers/Contacts'
import Footer from '../Containers/Footer'
import ScrollToTopRoute from './ScrollToTopRoute';
import Article from '../Containers/Article'

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Route path='/' component={Header} />
              <Route exact path='/' component={Home} />
              <ScrollToTopRoute path='/about' component={About} />
              <ScrollToTopRoute path='/contacts' component={Contacts}/>
              <ScrollToTopRoute path='/article/:typeID/:articleID' component={Article}/>
              <ScrollToTopRoute path='/' component={Footer} />
          </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;