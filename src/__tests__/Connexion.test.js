import React from 'react';
import ReactDOM from 'react-dom';
import Connection from '../pages/Connection/Connection';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

it('renders Connection without crashing', () => {
    const div = document.createElement('div');
	ReactDOM.render(<Router><Connection lang='fr'/></Router>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
