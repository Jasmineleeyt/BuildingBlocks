// This file contains code that will render the Home page/landing page
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// useEffect for doing something after component renders, e.g., fetching data from API, updating the DOM, storing something in localstorage

const Home = () => {

    // const navigate = useNavigate();

    return (
        <div>
            <Link to="login"><button>Sign-in</button></Link>
            <button>Discussions</button>
        </div>
    )

};

export default Home;
