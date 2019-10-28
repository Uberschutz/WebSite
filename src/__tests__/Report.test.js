import React from 'react';
import ReactDOM from 'react-dom';
import Report from '../pages/Report/Report';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

it('renders Report without crashing (not connected) in any language', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Report/>, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});

it('render Report being logged in french', () => {
	const div = document.createElement('div');
	const paramsComponent = shallow(<Report/>);
	paramsComponent.setProps({base: { language: 'fr'}});
	paramsComponent.setState({ lang: 'fr', logged: true });
	ReactDOM.render(paramsComponent, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});

it('render Report being logged in english', function () {
	const div = document.createElement('div');
	const paramsComponent = shallow(<Report/>);
	//paramsComponent.setProps({base: { logged: true, lang: 'fr' }});
	paramsComponent.setState({ lang: 'en', logged: true });
	ReactDOM.render(paramsComponent, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});
