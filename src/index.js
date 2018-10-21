import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Activity from './Activity'

ReactDOM.render(<Router>
    <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/activity" component={Activity}/>
        
    </div>
    </Router>, document.getElementById('root'));
