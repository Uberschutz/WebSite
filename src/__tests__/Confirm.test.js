import React from 'react';
import ReactDOM from 'react-dom';
import Confirm from '../pages/Confirm/Confirm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

it('renders Confirm without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router><Confirm lang='fr'/></Router>, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});
