import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../pages/HomePage';

it('renders Home without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomePage lang='fr'/>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
