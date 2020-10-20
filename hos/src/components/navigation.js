import React from 'react';
import {
    faInstagram,
    faFacebook
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: black; }
  .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: rgba(242,136,75,1); }
  }
  .navbar-light .navbar-toggler {
      background-color: white;
  }
`;
                   
function Navigation() {
  
    return ( 
        <Styles>
            <Navbar collapseOnSelect fixed="top" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
                    <Nav.Item><Nav.Link href="/aboutus">About Us</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/history">History</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/gallery">Gallery</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#">Join Us</Nav.Link></Nav.Item>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="https://www.facebook.com/humans.of.skule" target='blank'><FontAwesomeIcon icon={faFacebook} style={{color:'white'}} size='1.5x'/></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.instagram.com/humans.of.skule/" target='blank'><FontAwesomeIcon icon={faInstagram} style={{color:'white'}} size='1.5x'/></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}

export default Navigation;