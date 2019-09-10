import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../pages/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

it('renders Footer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Footer lang='fr'/></Router>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
