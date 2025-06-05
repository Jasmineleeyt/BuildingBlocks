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
            <Link to="discussions">
                <img className="home-block-img" src="https://res.cloudinary.com/dsdsdv6zj/image/upload/v1749083648/xanwr1b9pj4r0qzdq6rs.png"></img>
            </Link>
            <div className='about-us-section'>
                <h1 className="about-us-header">
                    About Us
                </h1>
                <p className='about-us-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet diam nec metus vehicula tristique. 
            I       nteger eget vulputate justo, sed dapibus lacus. Suspendisse potenti. Donec congue felis in lorem laoreet, 
                    ac fermentum massa feugiat. In eget tortor eu augue finibus viverra. Proin euismod euismod augue, nec sodales 
                    tellus facilisis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet diam nec metus vehicula tristique. 
            I       nteger eget vulputate justo, sed dapibus lacus. Suspendisse potenti. Donec congue felis in lorem laoreet, 
                    ac fermentum massa feugiat. In eget tortor eu augue finibus viverra. Proin euismod euismod augue, nec sodales 
                    tellus facilisis at.
                </p>
            </div>
        </div>
    )

};

export default Home;
