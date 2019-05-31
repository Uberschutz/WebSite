import React from 'react';
import ReactDOM from 'react-dom';
import Connexion from '../pages/Connexion';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

it('renders Connexion without crashing', () => {
    const div = document.createElement('div');
	ReactDOM.render(<Router><Connexion lang='fr'/></Router>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
