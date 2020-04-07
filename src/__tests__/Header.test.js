import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../pages/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Header component rendering', () => {

	it('renders Header without crashing in any language', () => {
		const div = document.createElement('div');
		// const paramsComponent = shallow(<Router><Header/></Router>);
		ReactDOM.render(<Router><Header/></Router>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render Header not being logged in french', () => {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'fr'
			}
		};
		// const paramsComponent = shallow(<Router><Header {...props}/></Router>);
		// paramsComponent.setProps({base: { language: 'fr'}});
		// paramsComponent.setState({ lang: 'fr', logged: true });
		ReactDOM.render(<Router><Header {...props}/></Router>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render Header not being logged in english', function () {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'en'
			}
		};
		// const paramsComponent = shallow(<Router><Header {...props}/></Router>);
		// paramsComponent.setProps({base: { logged: true, lang: 'fr' }});
		//paramsComponent.setState({ lang: 'en', logged: true });
		ReactDOM.render(<Router><Header {...props}/></Router>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render Header being logged in english', function () {
		const div = document.createElement('div');
		const props = {
			base: {
				logged: true,
				language: 'en'
			}
		};
		// const paramsComponent = shallow(<Router><Header {...props}/></Router>);
		// paramsComponent.setProps({base: { logged: true, lang: 'fr' }});
		//paramsComponent.setState({ lang: 'en', logged: true });
		ReactDOM.render(<Router><Header {...props}/></Router>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render Header being logged in french', function () {
		const div = document.createElement('div');
		const props = {
			base: {
				logged: true,
				language: 'fr'
			}
		};
		// const paramsComponent = shallow(<Router><Header {...props}/></Router>);
		// paramsComponent.setProps({base: { logged: true, lang: 'fr' }});
		//paramsComponent.setState({ lang: 'en', logged: true });
		ReactDOM.render(<Router><Header {...props}/></Router>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});
});
