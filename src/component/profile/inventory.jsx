import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Inventory extends Component {
    render() {
        console.log('am i');
        return (
            <div>
                <p>INVENTORY</p>
            </div>
        );
    }
}
export default withRouter(Inventory);
