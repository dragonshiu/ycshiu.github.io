import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './homeComponent.css';

class HomeCom extends Component {
    render() {
        console.log('home');
        return (
            <div className="overall">
                <div className="title">
                    <h1>Title</h1>
                </div>
                <div className="body">
                    <div className="navigation-menu">
                        <h3>Menu</h3>
                        <ul className="menu-list">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/logs">Logs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="main-content">
                        <p>this is the home page</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCom;
