import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <nav>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/new">NewMusicForm</Link></li>
                        <li><Link to="/music">MusicContainer</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;