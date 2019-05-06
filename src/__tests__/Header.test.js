import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../pages/Header';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
