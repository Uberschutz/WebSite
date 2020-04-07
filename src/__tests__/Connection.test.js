import React from 'react';
import ReactDOM from 'react-dom';
import Connection from '../pages/Connection/Connection';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Connection page rendering', () => {

	it('renders Connection without crashing in any language', () => {
		const div = document.createElement('div');
		// const paramsComponent = shallow(<Router><Connection/></Router>);
		ReactDOM.render(<Router><Connection/></Router>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render Connection in french', () => {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'fr'
			}
		};
		// const paramsComponent = shallow(<Router><Connection {...props}/></Router>);
		ReactDOM.render(<Router><Connection {...props}/></Router>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render Connection in english', function () {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'en'
			}
		};
		// const paramsComponent = shallow(<Router><Connection {...props}/></Router>);
		// paramsComponent.setProps({base: { logged: true, lang: 'en' }});
		// paramsComponent.setState({ lang: 'en', logged: true });
		ReactDOM.render(<Router><Connection {...props}/></Router>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});
});