import React from 'react';
import './styles/Home.css';

const Home = () => (
    <div className="home">
        <img className="home-img" src={require("../assets/home.jpg")} alt="home"/>
    </div>
);

export default Home;