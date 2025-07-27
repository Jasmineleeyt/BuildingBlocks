import React from 'react';
import logo from '../../assets/placeholder.png'; //currently just a placeholder image
import './Header.css';

export default function Header() {
    return (
        <div>
            <img src={logo} alt="app-logo" className="logo"/>
        </div>
    )
}