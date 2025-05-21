import React, { useEffect, useState } from 'react';
 
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

};

export default LoginPage;