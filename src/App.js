import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import './styles/App.css';

import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Switch>
            <Route path={'/'} exact strict component={HomePage}/>
            {/*<HomePage/>*/}
          </Switch>
          <Footer/>
        </div>
    );
  }
}

export default App;
