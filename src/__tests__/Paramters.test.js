import React from 'react';
import ReactDOM from 'react-dom';
import Parameters from '../pages/Parameters';

it('renders Parameters without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Parameters lang='fr'/>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
