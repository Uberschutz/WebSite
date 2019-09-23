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
import Report from "./pages/Report";
import Confirm from "./pages/Confirm";

import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import mainReducer from './combineReducers'


const persistConfig = {
	key: 'primary',
	storage,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);
// console.log(store.getState());
// const store = createStore(reducer);
// const store = createStore(mainReducer);

let persistor = persistStore(store);


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
	// const {
	// 	location: { pathname }
	// } = props;
	// const path = pathname.split("/")[1];
	console.log(props);
        return (
	        <Provider store={store}>
		        <PersistGate persistor={persistor}>
			        <div className="App">
		                <Router>
		                    <Header/>
		                    <Switch>
		                        <Route path='/' exact strict component={HomePage}/>
		                        <Route path={'/Connection'} exact component={Connection}/>
		                        <Route path={'/Contact+FAQ'} exact component={Contact}/>
		                        <Route path={'/Profile'} exact component={Profile}/>
		                        <Route path={'/Parameters'} exact component={Parameters}/>
			                    <Route path={'/Report'} exact component={Report}/>
			                    <Route path={'/Confirm/:id'} exact component={Confirm}/>
		                    </Switch>
		                    <Footer/>
		                </Router>
	                </div>
		        </PersistGate>
	        </Provider>
        );
	// }
};
// export default withRouter(App);
export default App;
// export default connect()(App);