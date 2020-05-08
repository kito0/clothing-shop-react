import React from 'react';
import './styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = props => (
    <header className="nav">
        <nav className="nav_navigation">
            <div className="nav_logo">
                <a href="/">
                    STREETWEAR
                </a>
            </div>
            <div className="space"></div>
            <div className="nav_navigation-items">
                <ul>
                    <Link to='./shop'><li>SHOP</li></Link>
                    <Link to='./lookbook'><li>LOOKBOOK</li></Link>
                    <Link to='./checkout'><li>CHECKOUT</li></Link>
                    <Link to='./about'><li>ABOUT</li></Link>
                    <Link to='./contact'><li>CONTACT</li></Link>
                </ul>
            </div>
        </nav>
    </header>
);

export default Nav;