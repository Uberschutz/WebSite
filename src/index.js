import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import mainReducer from './combineReducers'
import reducer from './reducer'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// export const store = createStore(
//     persistedReducer,
    // composeEnhancers(applyMiddleware(thunkMiddleware))
// );
const store = createStore(reducer);
// const store = createStore(mainReducer);

let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        {/*<PersistGate persistor={persistor}>*/}
            <Router>
                <App />
            </Router>
        {/*</PersistGate>*/}
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
