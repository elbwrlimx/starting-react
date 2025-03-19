import logo from "../../images/logo.png";
import React from 'react';
import './styles.css';

function Logo() {
  return (
    <div className="logo">
        <img src={logo} alt="Logo" className="header-logo" />
        <p>A Casca da Banana</p>
    </div>
  );
}

export default Logo;