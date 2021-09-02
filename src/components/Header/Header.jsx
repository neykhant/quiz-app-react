import { Link } from '@material-ui/core';
import React from 'react';
import './Header.css';

// jshint ignore:start
function Header() {
    return (
        <div className="header">
            <Link to="/" className="title">Intuitive Quiz Hub</Link>
            <hr className="divider" />
        </div>
    )
}


export default Header;
