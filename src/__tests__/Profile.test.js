import React from 'react';
import ReactDOM from 'react-dom';
import Profil from '../pages/Profil';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profil />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
