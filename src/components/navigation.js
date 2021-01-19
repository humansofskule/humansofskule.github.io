import React from 'react';
import {
    faInstagram,
    faFacebook,
    faTwitter,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';
const Styles = styled.div`
  .navbar { background-color: black; }
  .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: rgba(242,136,75,1); }
  }
  .navbar-light .navbar-toggler {
      background-color: white;
  }
  .nav-link.active {
    color: white !important; 
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
                    <Nav.Item><Nav.Link href="/gallery">Picture Gallery</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/video">Video Gallery</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/workshop">Workshop</Nav.Link></Nav.Item>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLScgQH6Y4md389fMffH7K1i4KZzS2I9YjEyM1Zbn2ny5-2ZUvA/viewform" target='blank'>Nominate</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSc9PlkyeDRJ1ftnPeX8Rrnp9N2xLtuldnInkJSEizRLJMP-4Q/viewform?usp=sf_link" target='blank'>Join Us</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="mailto:humansofskule@gmail.com" target='blank'><Icon.EnvelopeFill  style={{marginTop:'-3px'}}/></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.facebook.com/humans.of.skule" target='blank'><FontAwesomeIcon icon={faFacebook} style={{color:'white'}} size='1.5x'/></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.instagram.com/humans.of.skule/" target='blank'><FontAwesomeIcon icon={faInstagram} style={{color:'white'}} size='1.5x'/></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://twitter.com/HumansofSkule" target='blank'><FontAwesomeIcon icon={faTwitter} style={{color:'white'}} size='1.5x'/></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.youtube.com/channel/UCWzHfacjkPeb3XH9ieaXh2Q" target='blank'><FontAwesomeIcon icon={faYoutube} style={{color:'white'}} size='1.5x'/></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}

export default Navigation;