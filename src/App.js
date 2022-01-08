import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './components/aboutus';
import History from './components/history';
import Home from './components/home';
import Gallery from './components/gallery';
import Video from './components/video';
import Workshop from './components/workshop';
import Year from "./components/year";

class App extends Component {
    render() {
        return ( 
            <BrowserRouter basename=".">
                <div>       
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/aboutus" component={AboutUs}/>
                        <Route path="/history" component={History}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/video" component={Video}/>
                        <Route path="/workshop" component={Workshop}/>
                        <Route path="/year1">
                            <Year title="2015-2016" spreadsheet_key="1vaGU7imHuio_64wxmvu-4CMQ_jNQmz4MuS9FC_R-K34" />
                        </Route>
                        <Route path="/year2">
                            <Year title="2016-2017" spreadsheet_key="1y4p2em4kO9AFv3VX9cIRwMI0oUdKSwrh-l9oW-sDNSE" />
                        </Route>
                        <Route path="/year3">
                            <Year title="2017-2018" spreadsheet_key="1xiJOJbt70BfJCeX0ke1-mZ4ki3kq9qQWdo5zWqgMy6o" />
                        </Route>
                        <Route path="/year4">
                            <Year title="2018-2019" spreadsheet_key="1EICzbUJg0yPeDS86W_kFQToAOEnvh8qM63PUKGXxex4" />
                        </Route>
                        <Route path="/year5">
                            <Year title="2019-2020" spreadsheet_key="1VJosYlv7JOV7QbII1QOqVdibZYK6kSRVehCG84PUPjc" />
                        </Route>
                        <Route path="/year6">
                            <Year title="2020-2021" spreadsheet_key="1Y91ndFb9YUnJgNyoLyTJYg21Eqv4JsFjOKa7wjWRFGU" />
                        </Route>
                        <Route path="/year7">
                            <Year title="2021-2022" spreadsheet_key="1hLRjXduA_9rDM04OPTIyu7vQOaIzuZp6NLM88O2qcU0" />
                        </Route>
                    </Switch>
                </div> 
            </BrowserRouter>
        );
    }
}

export default App;