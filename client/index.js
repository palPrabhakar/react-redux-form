import React from 'react';
import { render } from 'react-dom';

//import components 
import App from './components/App';

import { Provider } from 'react-redux'; 
import store from './store';

const form = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(form, document.getElementById('root'));