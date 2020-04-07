import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../pages/Profile/Profile';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Profile page rendering', () => {

    it('renders Profile without crashing', () => {
        const div = document.createElement('div');
        // const paramsComponent = shallow(<Profile/>);
        ReactDOM.render(<Profile/>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Profile not being logged in english', () => {
        const div = document.createElement('div');
        const props = {
            base: {
                language: 'en'
            }
        };
        // const paramsComponent = shallow(<Profile {...props}/>);
        ReactDOM.render(<Profile {...props}/>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Profile not being logged in french', () => {
        const div = document.createElement('div');
        const props = {
            base: {
                language: 'fr'
            }
        };

        // const paramsComponent = shallow(<Profile {...props}/>);
        ReactDOM.render(<Profile {...props}/>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Profile being logged in english', () => {
        const div = document.createElement('div');
        const props = {
            base: {
                language: 'en',
                logged: true
            }
        };
        // const paramsComponent = shallow(<Profile {...props}/>);
        ReactDOM.render(<Profile {...props}/>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Profile being logged in french', () => {
        const div = document.createElement('div');
        const props = {
            base: {
                language: 'fr',
                logged: true
            }
        };

        // const paramsComponent = shallow(<Profile {...props}/>);
        ReactDOM.render(<Profile {...props}/>, div);
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });
});
