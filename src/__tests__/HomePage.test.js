import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../pages/HomePage/HomePage';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

it('renders Home without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomePage/>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});

it('renders Home in english', function () {
	const div = document.createElement('div');
	const homeComponent = shallow(<HomePage/>);
	homeComponent.setProps({base: { language: 'fr'}});
	// homeComponent.update();
	homeComponent.setState({ lang: 'en' });
	ReactDOM.render(homeComponent, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});
