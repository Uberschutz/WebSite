import React from 'react';
import ReactDOM from 'react-dom';
import Parameters from '../pages/Parameters/Parameters';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

it('renders Parameters without crashing (not connected) in any language', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Parameters/>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});

it('render Parameters being logged in french', () => {
	const div = document.createElement('div');
	const paramsComponent = shallow(<Parameters/>);
	paramsComponent.setProps({base: { language: 'fr'}});
	paramsComponent.setState({ lang: 'fr', logged: true });
	ReactDOM.render(paramsComponent, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});

it('render Parameters being logged in english', function () {
	const div = document.createElement('div');
	const paramsComponent = shallow(<Parameters/>);
	//paramsComponent.setProps({base: { logged: true, lang: 'fr' }});
	paramsComponent.setState({ lang: 'en', logged: true });
	ReactDOM.render(paramsComponent, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});