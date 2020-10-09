import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
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
import Subscription from "./pages/Subscription";
import DataCollect from "./pages/DataCollect";
import DataInformations from "./pages/DataInformations"
import Others from "./pages/Others";
import Payement from "./pages/Payement"
import GoogleSignIn from './pages/Google-SignIn';
import forgetPassword from "./pages/forgetPassword";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import mainReducer from './combineReducers'
import NotFound from "./pages/NotFound";
import InComing from "./pages/InComing";


import ReactGA from 'react-ga';

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

ReactGA.initialize('UA-170262602-1', {testMode: process.env.NODE_ENV !== 'production'});

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
			                    <Route path={'/Subscription'} component={Subscription}/>
			                    <Route path={'/InComing'} component={InComing}/>
			                    <Route path={'/DataCollect'} component={DataCollect}/>
			                    <Route path={'/DataInformations'} component={DataInformations}/>
			                    <Route path={'/others'} component={Others}/>
			                    <Route path={'/Payement'} component={Payement}/>
			                    <Route path={'/signin-google'} component={GoogleSignIn} />
			                    <Route path={'/forgetPassword'} component={forgetPassword}/>
			                    <Route path={'*'} component={NotFound}/>
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
