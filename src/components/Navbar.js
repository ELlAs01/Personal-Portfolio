import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';
import { useState, useEffect } from 'react';

export const Navbar = () => {
    
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation(); // know when location changes

    useEffect(() => {
      setExpandNavbar(false); // when useEffect runs this appends
    }, [location]); //run useEffect whenever location changes
    

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <Link to="/" > Home </Link>
            <Link to="/projects" > Projects </Link>
            <Link to="/experience" > Experience </Link>
        </div>
    </div>
  )
}

