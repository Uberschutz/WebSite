import React from 'react';
import ReactDOM from 'react-dom';
import Parametres from '../pages/Parametres';

it('renders Parameters without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Parametres lang='fr'/>, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
});
