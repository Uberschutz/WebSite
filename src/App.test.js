import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing the whole app rendering', () => {
    it('renders whole application without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });
});

// it('renders whole application without crashing', () => {
//   const div = document.createElement('div');
//   const paramsComponent = shallow(<App/>);
//   ReactDOM.render(paramsComponent, div);
//   expect(div).toMatchSnapshot();
//   ReactDOM.unmountComponentAtNode(div);
// });
