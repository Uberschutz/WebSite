import React from 'react';
import ReactDOM from 'react-dom';
import Parameters from '../pages/Parameters/Parameters';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Parameters page rendering', () => {

	it('renders Parameters without crashing (not connected) in any language', () => {
		const div = document.createElement('div');
		// const paramsComponent = shallow(<Parameters/>);
		ReactDOM.render(<Parameters/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render Parameters not being logged in french', () => {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'fr'
			}
		};
		// const paramsComponent = shallow(<Parameters {...props}/>);
		// paramsComponent.setProps({base: { language: 'fr'}});
		// paramsComponent.setState({ lang: 'fr', logged: true });
		ReactDOM.render(<Parameters {...props}/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render Parameters not being logged in english', function () {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'en'
			}
		};
		// const paramsComponent = shallow(<Parameters {...props}/>);
		//paramsComponent.setProps({base: { logged: true, lang: 'fr' }});
		// paramsComponent.setState({ lang: 'en', logged: true });
		ReactDOM.render(<Parameters {...props}/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render Parameters being logged in english', function () {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'en',
				logged: true
			}
		};
		// const paramsComponent = shallow(<Parameters {...props}/>);
		//paramsComponent.setProps({base: { logged: true, lang: 'fr' }});
		// paramsComponent.setState({ lang: 'en', logged: true });
		ReactDOM.render(<Parameters {...props}/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render Parameters being logged in french', function () {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'fr',
				logged: true
			}
		};
		// const paramsComponent = shallow(<Parameters {...props}/>);
		//paramsComponent.setProps({base: { logged: true, lang: 'fr' }});
		// paramsComponent.setState({ lang: 'en', logged: true });
		ReactDOM.render(<Parameters {...props}/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});
});
