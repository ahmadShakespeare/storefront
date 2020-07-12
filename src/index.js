import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-dom';

import App from './app';

import store from './store';

const Main = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);