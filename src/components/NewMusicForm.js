import React, { Component } from 'react';
import ReactDOM, { connect } from 'react-redux';

class NewMusicForm extends Component {
    render() {

        return (
            <div>
                <p>New Music Form</p>
            </div>
        );
    }
}

export default connect(null)(NewMusicForm);