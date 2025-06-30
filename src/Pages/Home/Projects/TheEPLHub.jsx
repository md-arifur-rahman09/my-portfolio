import React, { useState } from 'react';
import BackButton from '../../button/BackButton';

const TheEPLHub = () => {
    const [scale, setScale] = useState(1);

    const handleDoubleClick = () => {
        setScale(scale === 1.3 ? 1 : 1.3);
    };

    const features = [
        "Browse and register for sports events with rich EPL-themed UI",
        "User authentication system using Firebase",
        "Team-wise and category-based filtering",
        "Responsive design with protected routes"
    ];

    const techStack = [
        "React",
        "Tailwind CSS",
        "Firebase Auth",
        "React Router",
        "Context API",
        "DaisyUI"
    ];

    return (
        <section className="bg-base-100 py-16 px-6 lg:px-20 mb-10 lg:mb-20" >
            <BackButton />
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-6">⚽ The EPL Hub</h2>

                <div
                    onDoubleClick={handleDoubleClick}
                    className="transition-transform duration-300 ease-in-out cursor-pointer w-fit mx-auto"
                    style={{ transform: `scale(${scale})` }}
                >
                    <img
                        src="https://i.postimg.cc/7Yp4J1JX/the-EPL-hub.jpg"
                        alt="The EPL Hub"
                        className="rounded-lg mb-8 shadow-lg"
                    />
                </div>

                {/* Technology Stack */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-secondary">🛠️ Technology Stack</h3>
                    <ul className="flex flex-wrap gap-3">
                        {techStack.map((tech, i) => (
                            <li key={i} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium shadow-md hover:bg-blue-200 transition-colors cursor-default">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Features */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-secondary">⭐ Main Features</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {features.map((feature, i) => (
                            <li key={i} className="text-lg">{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Description */}
                <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                    The EPL Hub is an interactive event management platform tailored around the English Premier League. It allows users to explore sports events, filter by teams or categories, and register for activities with secure authentication and dynamic navigation. Designed to provide a real-world experience of modern event handling with elegant UI.
                </p>

                {/* Links */}
                <p className="mb-4 text-gray-700 text-lg">
                    <strong>Live Site:</strong>{" "}
                    <a href="https://assignment-09-f413c.web.app/" target="_blank" rel="noreferrer" className="link link-primary hover:underline">
                        Visit Website
                    </a>
                </p>

                <p className="mb-4 text-gray-700 text-lg">
                    <strong>Client Code:</strong>{" "}
                    <a href="https://github.com/md-arifur-rahman09/the-epl-hub" target="_blank" rel="noreferrer" className="link link-primary hover:underline">
                        GitHub Repo
                    </a>
                </p>

                {/* Challenges */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-secondary">⚠️ Challenges Faced</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Implementing dynamic routing with secure access, managing Firebase authentication states, and ensuring a smooth UX across all devices.
                    </p>
                </div>

                {/* Future Improvements */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">🚀 Future Improvements</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Adding admin dashboard, real-time scoreboard integration, and backend support for event analytics.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TheEPLHub;
