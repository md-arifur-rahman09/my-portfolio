import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const navItems = (
        <>
            <li>
                <NavLink to="/" className="hover:text-primary font-medium">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className="hover:text-primary font-medium">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/projects" className="hover:text-primary font-medium">
                    Projects
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
            {/* Left: Logo / Brand Name */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10m-10 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="text-xl md:text-2xl font-bold text-primary">
                    Arif<span className="text-secondary">.dev</span>
                </Link>
            </div>

            {/* Center: Nav Items (Only on large screens) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
            </div>

            {/* Right: Contact Button */}
            <div className="navbar-end">
                <Link to="/contact" className="btn btn-primary font-semibold">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
