import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
const SignupPage = () => {
    //Create variables for the user input fields and initialize them with empty strings.
    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
    });
    
    //Update input values when user input changes
    const handleSignupInput = (e) => {
        setSignupData({
            ...signupData,
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
            <h2>Sign Up</h2>
                <input type="text" name="username" placeholder="Username" value={signupData.username} onChange={handleSignupInput}/>
                <br />
                <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupInput}/>
                <br />
                <h3>Have an account already? <Link to="/login">Login</Link></h3>
                <button type="submit"> &rarr; </button>
        </form>
        )


};

export default SignupPage;