import React from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';

const NavBar = () => {
    return (
        <header>
            <Link to="/">Adopt Me!</Link>
            <span aria-label="logo" role="img">
                🐩
            </span>
        </header>
    );
}

export default NavBar;
