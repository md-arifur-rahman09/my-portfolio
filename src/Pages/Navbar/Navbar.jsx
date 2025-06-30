
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50); // You can adjust the scroll threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
      <li><NavLink to="/" className="hover:text-primary font-medium">Home</NavLink></li>
      <li><NavLink to="/about" className="hover:text-primary font-medium">About Me</NavLink></li>
      <li><NavLink to="/projects" className="hover:text-primary font-medium">Projects</NavLink></li>
    </>
  );

  return (
    <div className={`navbar fixed top-0 z-50 w-full bg-base-100 shadow-md transition-all duration-300 ease-in-out ${
      isShrunk ? 'py-2 h-14' : 'py-2 h-16'
    }`}>
      {/* Navbar Start */}
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10m-10 6h16" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[1]">
            {navItems}
          </ul>
        </div>
        <Link to="/" className={`text-xl  md:text-2xl font-bold text-primary transition-all duration-300  ${
          isShrunk ? 'text-lg' : ''
        }`}>
          Arif<span className="text-secondary ">.dev</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1 gap-2">{navItems}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Link to="/contact" className="btn btn-primary font-semibold">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
