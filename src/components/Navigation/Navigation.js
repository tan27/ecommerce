import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }

    return (
        // <nav className="navBar">
        // <button onClick={handleToggle}>{navbarOpen ? "Showing" : "Not Showing"}</button>
        // <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        //     <li>About</li>
        //     <li>Home</li>
        //     <li>Services</li>
        //     <li><button>Contact</button></li>
        // </ul>
        // </nav>
    ) 
}

export default Navigation;
