import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../pages/Contact';

it('renders Contact without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact lang='fr'/>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
