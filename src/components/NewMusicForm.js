import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newMusic } from '../actions/musicActions';

class NewMusicForm extends Component {
        constructor(props){
            super(props)
            this.state = {
                chord: '',
                instrument: '',
                band: '',
                album: '',
                genre: '',
                mambo_no_5: '',
            }
        }

        handleChange = event => {
            this.setState({ [event.target.name]: event.target.value })
        }

        handleSubmit = event => {
            event.preventDefault();
            this.props.newMusic({
                ...this.state, likes: 0},
                this.props.history)
        }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="chord" value={this.state.chord} onChange={this.handleChange}
                            id="chord" className="textbox" placeholder="chord" />
                        <input type="text" name="instrument" value={this.state.instrument} onChange={this.handleChange}
                            id="instrument" className="textbox" placeholder="instrument" />
                        <input type="text" name="band" value={this.state.band} onChange={this.handleChange}
                            id="band" className="textbox" placeholder="band" />
                        <input type="text" name="album" value={this.state.album} onChange={this.handleChange}
                            id="album" className="textbox" placeholder="album" />
                        <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange}
                            id="genre" className="textbox" placeholder="genre" />
                        <input type="text" name="mambo_no_5" value={this.state.mambo_no_5} onChange={this.handleChange}
                            id="mambo_no_5" className="textbox" placeholder="mambo_no_5" />    
                    </div>
                    <input type="submit" value="Make Music"/>
                </form>
            </div>
        );
    }
}

export default connect(null, { newMusic })(NewMusicForm);