import React from 'react';
import ReactDOM from 'react-dom';
import Report from '../pages/Report/Report';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

it('renders Report without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router><Report lang='fr'/></Router>, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});
