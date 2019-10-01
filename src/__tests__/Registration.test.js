import React from 'react';
import ReactDOM from 'react-dom';
import Registration from '../pages/Registration/Registration';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

it('renders Registration without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router><Registration lang='fr'/></Router>, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});
