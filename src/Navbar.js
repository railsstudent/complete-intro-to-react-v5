import React from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';
import colors from './colors';

const NavBar = () => {
    return (
        <header
            css={css`
                background-color: ${colors.dark};
                position: sticky;
                top: 0;
                z-index: 10;
            `}
        >
           <Link
                css={css`
                    &:hover {
                    text-decoration: underline;
                    }
                `}
                to="/"
            >Adopt Me!</Link>
            <span aria-label="logo" role="img">
                🐩
            </span>
        </header>
    );
}

export default NavBar;
