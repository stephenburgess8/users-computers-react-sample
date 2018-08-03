import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Link to="/"><div className="App-logo"><i className="fa fa-users"></i></div></Link>
                <Link to="/"><h1 className="App-title">Users</h1></Link>
            </header>
        );
    }
}

export default Header;
