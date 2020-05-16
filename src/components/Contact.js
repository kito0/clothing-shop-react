import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
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
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Question 1
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Answer to question text goes here
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Question 2
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Answer to question text goes here
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
        </div>
    </div>
);

export default Contact;