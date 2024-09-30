import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </nav>
        </header>
    );
};

export default Header;
