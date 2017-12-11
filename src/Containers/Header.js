import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from "react-bootstrap"
import "../Styles/Header.css"
import NEEClogo from '../Images/NEEClogo.png'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar id="main-nav" toggleNavKey={1} fixedTop={true} collapseOnSelect >
          <Navbar.Header>
          <Link to='/'><Navbar.Brand>
              <img className='NEEClogo' src={NEEClogo}/>
            </Navbar.Brand>
            </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight key={1}>
              <NavItem key={1} ><Link to='/about'>About</Link></NavItem>
              <NavItem key={3} ><Link to='/workshops'>Workshops</Link></NavItem>
              <NavItem key={4} ><Link to='/events'>Events</Link></NavItem>
              <NavItem key={5} ><Link to='/contacts'>Contacts</Link></NavItem>
            </ Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;