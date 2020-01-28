import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
)

serviceWorker.unregister();
