import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="nav-links">
        </ul>
      </nav>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Cloud Engineering Training Program</h1>
        <p className="hero-description">
          Learn to code and unlock your full potential.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
    </header>
  );
};

export default MainHeader;