import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../pages/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

it('renders Header without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Header lang='fr'/></Router>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
