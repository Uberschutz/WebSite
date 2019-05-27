import React from 'react';
import ReactDOM from 'react-dom';
import Connexion from '../pages/Connexion';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Connexion />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
