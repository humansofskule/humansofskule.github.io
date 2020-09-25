import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

import AboutUs from './components/aboutus';
import History from './components/history';
import Home from './components/home';

class App extends Component {
    render() {
        return ( 
            <BrowserRouter>
                <div>       
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="aboutus" component={AboutUs}/>
                        <Route path="history" component={History}/>
                    </Switch>
                </div> 
            </BrowserRouter>
        );
    }
}

export default App;