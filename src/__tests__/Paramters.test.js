import React from 'react';
import ReactDOM from 'react-dom';
import Parametres from '../pages/Parametres';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Parametres />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
