import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './index.css';

React.DOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);