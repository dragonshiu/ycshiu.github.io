import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Inventory from './inventory';
import Collection from './collection';
// import './profileComponent.css';

class ProfileCom extends Component {
    render() {
        console.log('hellos', this.props.match.path);
        return (
            <div className="overall">
                <Link to="/profile/inventory">Inventory</Link>
                <Link to="/profile/collection">Collection</Link>
                <Route path={'/profile/inventory'} component={Inventory} />
                <Route path={'/profile/collection'} component={Collection} />
            </div>
        );
    }
}

export default withRouter(ProfileCom);
