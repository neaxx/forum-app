import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './css/bulma.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const Store = store();
ReactDOM.render(
 <Provider store={Store}>
    <App />
  </Provider>,
   document.getElementById('root'));


registerServiceWorker();
