import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../pages/Contact';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
