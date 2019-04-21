import React, { Component } from 'react';
// import { Switch, Route, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import './styles/App.css';

import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

class App extends Component {
  render() {
    return (
        <div>
          <Router>
          <Header/>
          <Switch>
            <Route path={'/'} exact strict component={HomePage}/>
            {/*<HomePage/>*/}
          </Switch>
          <Footer/>
          </Router>
        </div>
    );
  }
}

export default App;
