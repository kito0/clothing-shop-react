import React from 'react';
import './styles/Contact.css';

const Contact = () => (
    <div className="contact">
        <img className="contact-img" src={require("../assets/contactBG.JPG")} alt="contact"/>
        <div className="contact-block">
            <h1 className="contact-txt">Contact</h1>
            <h2 className="contact-item">For sizing, stock inquiries, or refunds: info@wearsoup.com</h2>
            <h2 className="contact-item">For business inquiries: business@wearsoup.com</h2>
            <h2 className="contact-item">For wholesale inquiries or opportunities: wholesale@wearsoup.com</h2>
            <h1 className="contact-txt">FAQs</h1>
        </div>
    </div>
);

export default Contact;