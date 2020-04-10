import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../pages/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Footer component rendering', () => {

    it('renders Footer without crashing', () => {
        const div = document.createElement('div');
        // const paramsComponent = shallow(<Router><Footer/></Router>);
        ReactDOM.render(<Router><Footer/></Router>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Footer in english', () => {
        const div = document.createElement('div');
        const props = {
            base: {
                language: 'en'
            }
        };
        // const paramsComponent = shallow(<Router><Footer {...props}/></Router>);
        ReactDOM.render(<Router><Footer {...props}/></Router>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Footer in french', () => {
        const div = document.createElement('div');
        const props = {
            base: {
                language: 'fr'
            }
        };
        // const paramsComponent = shallow(<Router><Footer {...props}/></Router>);
        ReactDOM.render(<Router><Footer {...props}/></Router>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });
});
