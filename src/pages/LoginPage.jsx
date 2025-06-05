import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
const LoginPage = () => {
    //Create variables for the user input fields and initialize them with empty strings.
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    
    //Update input values when user input changes
    const handleLoginInput = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };
    
    //Handle form submit. TO DO: will need to update this part once auth is added
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };
    
    // To DO: functionality - POST method
    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Login</h2>
                <input type="text" name="username" placeholder="Username" value={loginData.username} onChange={handleLoginInput}/>
                <br />
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginInput}/>
                <br />
                <h3>Don't have an account yet? <Link to="/signup">Sign Up</Link></h3>
                <button type="submit"> &rarr; </button>
        </form>
        )


};

export default LoginPage;