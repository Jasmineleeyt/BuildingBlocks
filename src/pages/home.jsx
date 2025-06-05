// This file contains code that will render the Home page/landing page
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// useEffect for doing something after component renders, e.g., fetching data from API, updating the DOM, storing something in localstorage

const Home = () => {

    // const navigate = useNavigate();

    return (
        <div>
            <Link to="login">
                <img className="home-block-img" src="https://res.cloudinary.com/dsdsdv6zj/image/upload/v1749083300/g1awpvi4eqja6azkwmbb.png"></img>
            </Link>
            <Link to="">
                <img className="home-block-img" src="https://res.cloudinary.com/dsdsdv6zj/image/upload/v1749083648/xanwr1b9pj4r0qzdq6rs.png"></img>
            </Link>
        </div>
    )

};

export default Home;
