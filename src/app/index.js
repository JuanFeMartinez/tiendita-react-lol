import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from '.';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();