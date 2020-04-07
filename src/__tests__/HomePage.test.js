import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../pages/HomePage/HomePage';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Homepage rendering', () => {

	it('renders Home without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<HomePage/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders Home in english', function () {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'en'
			}
		};
		// const homeComponent = shallow(<HomePage {...props}/>);
		// homeComponent.setProps({base: { language: 'en'}});
		//homeComponent.setState({ lang: 'en' });
		//homeComponent.update();
		ReactDOM.render(<HomePage {...props}/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders Home in french', function () {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'fr'
			}
		};
		// const homeComponent = shallow(<HomePage {...props}/>);
		// homeComponent.setProps({base: { language: 'en'}});
		//homeComponent.setState({ lang: 'en' });
		//homeComponent.update();
		ReactDOM.render(<HomePage {...props}/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});
});
