import React, { Component } from 'react'
import { connect } from 'react-redux';

class MusicContainer extends Coponent {

    render() {
        return (
            <div>
                <p>Music Container</p>
            </div>
        );
    }
}

export default connect(null)(MusicContainer);