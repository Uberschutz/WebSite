import React from 'react';
import ReactDOM from 'react-dom';
import Profil from '../pages/Profil';

it('renders Profile without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profil lang='fr' />, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
