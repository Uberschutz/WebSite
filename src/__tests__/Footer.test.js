import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../pages/Footer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
