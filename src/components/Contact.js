import React from 'react';
import './styles/Contact.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Contact = () => (
    <div className="contact">
        <img className="contact-img" src={require("../assets/contactBG.JPG")} alt="contact"/>
        <div className="contact-block">
            <h1 className="contact-txt">Contact</h1>
            <h2 className="contact-item">For sizing, stock inquiries, or refunds: info@wearsoup.com</h2>
            <h2 className="contact-item">For business inquiries: business@wearsoup.com</h2>
            <h2 className="contact-item">For wholesale inquiries or opportunities: wholesale@wearsoup.com</h2>

            <h1 className="contact-txt">FAQs</h1>
            <div className="faq">
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                QUESTION 1
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Answer to question 1
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                QUESTION 2
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Answer to question 2
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>            
        </div>
    </div>
);

export default Contact;