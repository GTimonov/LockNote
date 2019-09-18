import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* <h1>Lock Note</h1> */}

                <Link to="/reddedit">reddedit</Link>
                <br />
                <Link to="/create">create</Link>
            </div>
        );
    }
}

export default Header;
