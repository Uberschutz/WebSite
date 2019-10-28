import React from 'react';
import ReactDOM from 'react-dom';
import Connection from '../pages/Connection/Connection';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

it('renders Connection without crashing (not connected) in any language', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router><Connection/></Router>, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});

it('render Connection being logged in french', () => {
	const div = document.createElement('div');
	const paramsComponent = shallow(<Router><Connection/></Router>);
	paramsComponent.setProps({base: { language: 'fr'}});
	paramsComponent.setState({ lang: 'fr', logged: true });
	ReactDOM.render(paramsComponent, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});

it('render Connection being logged in english', function () {
	const div = document.createElement('div');
	const paramsComponent = shallow(<Router><Connection/></Router>);
	//paramsComponent.setProps({base: { logged: true, lang: 'fr' }});
	paramsComponent.setState({ lang: 'en', logged: true });
	ReactDOM.render(paramsComponent, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});
