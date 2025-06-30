import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-300 text-base-content pt-8 pb-5 px-6 lg:px-20 ">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

                {/* Brand Section */}
                <div>
                   <Link to='/' > <h2 className="text-2xl font-bold text-green-800 hover:text-green-400">Arif<span className="text-secondary hover:text-green-400">.dev</span></h2></Link>
                    <p className="mt-3 text-sm text-gray-600">
                        Passionate Frontend Developer specializing in React, Tailwind CSS & modern web technologies. Turning ideas into reality through code.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className=" font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1  text-gray-800">
                        <li><Link to="/" className="hover:text-green-400">Home</Link></li>
                        <li><Link to="/about" className="hover:text-green-400">About</Link></li>
                        <li><Link to="/projects" className="hover:text-green-400">Projects</Link></li>
                        <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
                    <div className="flex gap-4 mt-3">
                       
                        <a href="https://github.com/md-arifur-rahman09" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-green-400 text-3xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/md-arifur-rahman09" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-green-400 text-3xl">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="text-center pt-5 mt-5 border-t text-sm text-gray-800">
                © {new Date().getFullYear()} Arif.dev — All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
