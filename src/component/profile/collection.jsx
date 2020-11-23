import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Collection extends Component {
    render() {
        console.log('matcj:', this.props.match);
        return (
            <div>
                <p>Collection</p>
            </div>
        );
    }
}
export default withRouter(Collection);
