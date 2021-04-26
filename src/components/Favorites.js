import React, { Component } from 'react';
import { connect } from 'react-redux'

class Favorites extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = ({favorites}) => ({favorites});

export default connect(mapStateToProps)(Favorites);

