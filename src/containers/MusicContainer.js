import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteMusic } from '../actions/musicActions';

class MusicContainer extends Component {

    render() {
        return (
            <div>
                <p>Music Container</p>
            </div>
        );
    }
}

const mapStateToProps = state => { return { tunes: state.group, }}
const mapDispatchToProps = dispatch => {
    return { deleteMusic: id => dispatchEvent(deleteMusic(id))
}}

export default connect(mapStateToProps, mapDispatchToProps)(MusicContainer);