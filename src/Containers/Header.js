import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from "react-bootstrap"
import "../Styles/Header.css"
import NEEClogo from '../Images/NEEClogo.png'

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar id="main-nav" toggleNavKey={1} fixedTop={true} collapseOnSelect >
          <Navbar.Header>
            <Navbar.Brand>
              <img className='NEEClogo' src={NEEClogo}/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight key={1}>
              <NavItem key={1} >About</NavItem>
              <NavItem key={3} >Workshops</NavItem>
              <NavItem key={4} >Events</NavItem>
              <NavItem key={5} >Contacts</NavItem>
            </ Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;