import React from 'react';

import './styles/Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo">
                <a href="/">
                    LOGO
                </a>
            </div>
            <div className="space"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">SHOP</a></li>
                    <li><a href="/">LOOKBOOK</a></li>
                    <li><a href="/">CHECKOUT</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;