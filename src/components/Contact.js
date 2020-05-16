import React, { useState } from 'react';
import './styles/Contact.css';

const [faqs, setfaqs] = useState([
    {
        question: 'Question 1',
        answer: 'Answer to oquestion goes here',
        open: false
    },

    {
        question: 'Question 2',
        answer: 'Answer to oquestion goes here',
        open: false
    },

    {
        question: 'Question 3',
        answer: 'Answer to oquestion goes here',
        open: false
    },
    
    {
        question: 'Question 4',
        answer: 'Answer to oquestion goes here',
        open: false
    }
]);

const Contact = () => (
    <div className="contact">
        <img className="contact-img" src={require("../assets/contactBG.JPG")} alt="contact"/>
        <div className="contact-block">
            <h1 className="contact-txt">Contact</h1>
            <h2 className="contact-item">For sizing, stock inquiries, or refunds: info@wearsoup.com</h2>
            <h2 className="contact-item">For business inquiries: business@wearsoup.com</h2>
            <h2 className="contact-item">For wholesale inquiries or opportunities: wholesale@wearsoup.com</h2>
            <h1 className="contact-txt">FAQs</h1>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <div>
                        {faq.question}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Contact;