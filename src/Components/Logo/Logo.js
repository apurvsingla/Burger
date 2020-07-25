import React from 'react';
import burgerLogo from '../../assets/images/27.1 burger-logo.png';
import './Logo.css';

const Logo = (props) => {
    return (
        <div className="Logo">
            <img src={burgerLogo} alt="Awesome-Burger" />
        </div>
    );
}

export default Logo;
