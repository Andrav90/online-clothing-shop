import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './index.css';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();