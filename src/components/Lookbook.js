import React from 'react';
import './styles/Lookbook.css';

const Lookbook = () => (
    <div className="lookbook">
        <img className="lookbook-img" src={require("../assets/LOOKBOOK1.jpg")} alt="first image"/>
        <img className="lookbook-img" src={require("../assets/LOOKBOOK2.jpg")} alt="second image"/>
        <img className="lookbook-img" src={require("../assets/LOOKBOOK3.jpg")} alt="third image"/>
        <img className="lookbook-img" src={require("../assets/LOOKBOOK4.JPG")} alt="fourth image"/>
        <img className="lookbook-img" src={require("../assets/LOOKBOOK5.JPG")} alt="fifth image"/>
        <img className="lookbook-img" src={require("../assets/LOOKBOOK6.JPG")} alt="sixth image"/>
    </div>
);

export default Lookbook;