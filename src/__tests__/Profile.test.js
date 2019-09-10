import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../pages/Profile/Profile';

it('renders Profile without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profile lang='fr' />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
