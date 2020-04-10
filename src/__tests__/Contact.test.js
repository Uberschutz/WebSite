import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../pages/Contact/Contact';

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Contact Page rendering', () => {

    it('renders Contact without crashing in any language', () => {
        const div = document.createElement('div');
        // const paramsComponent = shallow(<Contact/>);
        ReactDOM.render(<Contact/>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Contact in english', () => {
        const div = document.createElement('div');
        const props = {
            base: {
                language: 'en'
            }
        };
        // const paramsComponent = shallow(<Contact {...props}/>);
        ReactDOM.render(<Contact {...props}/>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Contact in french', () => {
        const div = document.createElement('div');
        const props = {
            base: {
                language: 'fr'
            }
        };
        // const paramsComponent = shallow(<Contact {...props}/>);
        ReactDOM.render(<Contact {...props}/>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });
});
