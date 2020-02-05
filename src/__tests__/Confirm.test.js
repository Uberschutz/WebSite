import React from 'react';
import ReactDOM from 'react-dom';
import Confirm from '../pages/Confirm/Confirm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

it('renders Confirm without crashing', () => {
	const div = document.createElement('div');
	const paramsComponent = shallow(<Router><Confirm/></Router>);
	paramsComponent.setProps({base: { language: 'fr'}});
	paramsComponent.setState({ lang: 'fr' });
	ReactDOM.render(paramsComponent, div);
	expect(div).toMatchSnapshot();
	ReactDOM.unmountComponentAtNode(div);
});
