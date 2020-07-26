import React from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './colors';

const Spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

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
            <span 
                css={css`
                    display: inline-block;
                    animation: 1s ${Spin} linear infinite;
                    font-size: 60px;
                    margin-right: 15px;
                `}
                aria-label="logo" 
                role="img"
            >
                🐩
            </span>
        </header>
    );
}

export default NavBar;
