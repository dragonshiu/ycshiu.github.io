import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeRoute from './route/homeRoute';
import ProfileRoute from './route/profileRoute';
import LogsRoute from './route/logsRoute';

function App() {
    return (
        <Router>
            <div className="App">
                {/* maybe this needs to use absolute css */}
                <Route path="/" exact component={HomeRoute} />
                <Route path="/profile" component={ProfileRoute} />
                {/* inventory, card collection */}
                <Route path="/logs" component={LogsRoute} />
                {/* shop, arena */}
            </div>
        </Router>
    );
}

export default App;
