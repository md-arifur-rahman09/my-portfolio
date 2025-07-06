import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Hero = () => {
   
    return (
        <div className="hero min-h-[75vh] px-5 lg:px-20 
   
    
            transition-all duration-300 ">

            <div className="hero-content flex-col lg:flex-row-reverse gap-10 text-base-content">
                {/* Right Side: Image */}
                <img
                    src="https://i.postimg.cc/Tw5wsJS6/arif2.jpg"
                    className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-full shadow-2xl"
                    alt="Md Arifur Rahman"
                />

                {/* Left Side: Text */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Md Arifur Rahman</h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-3">MERN Stack Developer</h2>
                    <p className="text-base md:text-lg text-justify max-w-xl mb-6">
                        Full Stack Web Developer from Bangladesh 🇧🇩, focused on building dynamic and scalable MERN stack applications.
                        I enjoy solving real-world problems with clean code and continuously improving my skills in React, Node.js, and modern backend tools.
                    </p>

                    {/* Social Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://github.com/md-arifur-rahman09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-primary btn-sm sm:btn-md"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/md-arifur-rahman09/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-secondary btn-sm sm:btn-md"
                        >
                            <FaLinkedin className="mr-2" /> LinkedIn
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1b08Lm27hqQBx1jDUNeAjAKN94oK7qcnW/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success btn-sm sm:btn-md"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
