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
                <p><Link to='./shop'>MEN</Link></p>
                <p><Link to='./shop'>WOMEN</Link></p>
                <p><Link to='./shop'>KIDS</Link></p>
                <p><Link to='./shop'>ACCESSORIES</Link></p>
            </div>
            <div className="col">
                <p className="bold">ABOUT SOUP</p>
                <p><Link to='./about'>ABOUT US</Link></p>
                <p><Link to='./lookbook'>LOOKBOOK</Link></p>
                <p><Link to='./careers'>CAREERS</Link></p>
            </div>
            <div className="col">
                <p className="bold">HELP</p>
                <p><Link to='./contact'>CONTACT US</Link></p>
                <p>DELIVERY</p>
                <p>RETURNS</p>
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