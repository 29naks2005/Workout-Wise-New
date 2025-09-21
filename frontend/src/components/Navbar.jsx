'use client'; 
import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><Link href="/">WORKOUT WISE</Link></div>
    </nav>
  );
};

export default Navbar;
