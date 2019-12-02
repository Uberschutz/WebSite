import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/App.css';

import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Connection from "./pages/Connection";
import Registration from "./pages/Registration";
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

let persistor = persistStore(store);


const App = props => {
        return (
	        <Provider store={store}>
		        <PersistGate persistor={persistor}>
			        <div className="App">
		                <Router>
		                    <Header/>
		                    <Switch>
		                        <Route path='/' exact strict component={HomePage}/>
		                        <Route path={'/Connection'} exact component={Connection}/>
		                        <Route path={'/Registration'} exact component={Registration}/>
		                        <Route path={'/Contact+FAQ'} exact component={Contact}/>
		                        <Route path={'/Profile'} exact component={Profile}/>
		                        <Route path={'/Parameters'} exact component={Parameters}/>
			                    <Route path={'/Report'} exact component={Report}/>
			                    <Route path={'/Confirm'} component={Confirm}/>
		                    </Switch>
		                    <Footer/>
		                </Router>
	                </div>
		        </PersistGate>
	        </Provider>
        );
	// }
};

export default App;
