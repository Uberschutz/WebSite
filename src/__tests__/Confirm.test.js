import React from 'react';
import ReactDOM from 'react-dom';
import Confirm from '../pages/Confirm/Confirm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Confirm page rendering', () => {

	it('renders Confirm without crashing in any language', () => {
		const div = document.createElement('div');
		// const paramsComponent = shallow(<Confirm/>);
		// paramsComponent.setProps({base: { language: 'fr'}});
		// paramsComponent.setState({ lang: 'fr' });
		ReactDOM.render(<Confirm/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders Confirm without crashing in french', () => {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'fr'
			}
		};
		// const paramsComponent = shallow(<Confirm {...props}/>);
		// paramsComponent.setProps({base: { language: 'fr'}});
		// paramsComponent.setState({ lang: 'fr' });
		ReactDOM.render(<Confirm {...props}/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders Confirm without crashing in english', () => {
		const div = document.createElement('div');
		const props = {
			base: {
				language: 'fr'
			}
		};
		// const paramsComponent = shallow(<Confirm {...props}/>);
		// paramsComponent.setProps({base: { language: 'fr'}});
		// paramsComponent.setState({ lang: 'fr' });
		ReactDOM.render(<Confirm {...props}/>, div);
		expect(div).toMatchSnapshot();
		ReactDOM.unmountComponentAtNode(div);
	});
});
