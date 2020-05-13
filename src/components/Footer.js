import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';
import '../assets/payment.jpg';

const Footer = () => (
    <div className="footer">
        <h1 className="horizontal-line"/>
        <div className="row">
            <div className="col">
                <p className="bold">SHOP SOUP</p>
                <p><Link to='./shop'><li>MEN</li></Link></p>
                <p><Link to='./shop'><li>WOMEN</li></Link></p>
                <p><Link to='./shop'><li>KIDS</li></Link></p>
                <p><Link to='./shop'><li>ACCESSORIES</li></Link></p>
            </div>
            <div className="col">
                <p className="bold">ABOUT SOUP</p>
                <p>ABOUT US</p>
                <p>BLOG</p>
                <p>CAREERS</p>
            </div>
            <div className="col">
                <p className="bold">HELP</p>
                <p>CONTACT US</p>
                <p>RETURNS</p>
                <p>DELIVERY</p>
                <p>LOGIN</p>
            </div>
            <div className="col">
                <p className="bold">FOLLOW US ON</p>
                <p>FACEBOOK</p>
                <p>INSTAGRAM</p>
                <p>TWITTER</p>
                <p>YOUTUBE</p>
            </div>
            <div className="col">
                <p className="bold">PAYMENT OPTIONS</p>
                <img className="payment-img" src={require("../assets/payment.png")} alt="payment"/>
            </div>
        </div>
        <h3 className="horizontal-line"/>
        <h4 className="copyright">
            © 2020 SOUP APPAREL BRANDS GROUP INTERNATIONAL INC. &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
            TERMS & CONDITIONS &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; PRIVACY POLICY
        </h4>
    </div>
);

export default Footer;