import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import './styles/App.css';

import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Connection from "./pages/Connection";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Parameters from "./pages/Parameters";
import { connect } from 'react-redux';

// class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		// lang: 'fr',
	// 		// logged: false
	// 	};
	// 	// this.setLanguage = this.setLanguage.bind(this);
	// 	// this.setLogged = this.setLogged.bind(this);
	// }

	// setLogged() {
	// 	this.setState({logged: !this.state.logged});
	// }

	// setLanguage(lang) {
	// 	this.props.setLanguage(lang)
	// 	// this.setState({
	// 	// 	lang: lang
	// 	// });
	// }

	// render() {
const App = props => {
	const {
		location: { pathname }
	} = props;
	const path = pathname.split("/")[1];
	console.log(props);
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Switch>
                        <Route path='/' exact strict component={HomePage}/>
                        <Route path={'/Connection'} exact component={Connection}/>
                        <Route path={'/Contact+FAQ'} exact component={Contact}/>
                        <Route path={'/Profile'} exact component={Profile}/>
                        <Route path={'/Parameters'} exact component={Parameters}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
	// }
};
export default withRouter(App);
// export default App;
// export default connect()(App);