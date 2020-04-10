import React from 'react';
import ReactDOM from 'react-dom';
import Registration from '../pages/Registration/Registration';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Registration page rendering', () => {

	it('renders Registration without crashing', () => {
		const div = document.createElement('div')
		// const paramsComponent = shallow(<Registration/>);
		ReactDOM.render(<Registration/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders Registration in english', () => {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'en'
			}
		};
		// const paramsComponent = shallow(<Registration {...props}/>);
		ReactDOM.render(<Registration {...props}/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders Registration in french', () => {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'fr'
			}
		};
		// const paramsComponent = shallow(<Registration {...props}/>);
		ReactDOM.render(<Registration {...props}/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});
});