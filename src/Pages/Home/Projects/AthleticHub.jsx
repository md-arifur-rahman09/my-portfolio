import React, { useState } from 'react';
import BackButton from '../../button/BackButton';
import { useTitle } from '../../../hooks/UseTitle';

const AthleticHub = () => {

    useTitle("Athletic Hub")
    const [scale, setScale] = useState(1);

    const handleClick = () => {
        setScale(scale === 1.3 ? 1 : 1.3);
    };

    const features = [
        "Browse and filter multiple sports events easily",
        "User registration and profile management",
        "Admin dashboard with real-time analytics using Recharts"
    ];

    const techStack = [
        "React",
        "Tailwind CSS",
        "Firebase Auth",
        "Express.js",
        "MongoDB",
        "DaisyUI"
    ];

    return (
        <section className="bg-base-100 py-16 px-6 lg:px-20 pb-10 lg:pb-20  bg-gradient-to-r 
    from-[#e8f5e9] via-[#f1f8e9] to-[#e3f2fd]">
            <BackButton></BackButton>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-6"> 🤾‍♀️ Athletic Hub</h2>

                <div
                    onClick={handleClick}
                    className="transition-transform duration-300 ease-in-out cursor-pointer w-fit mx-auto"
                    style={{ transform: `scale(${scale})` }}
                >
                    <img src="https://i.postimg.cc/MGch6czW/athletic-hub.jpg" alt="Athletic Hub" className="rounded-lg mb-8 shadow-lg" />
                </div>

                {/* Technology Stack */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-secondary">🛠️ Technology Stack</h3>
                    <ul className="flex flex-wrap gap-3">
                        {techStack.map((tech, i) => (
                            <li key={i} className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium shadow-md hover:bg-green-200 transition-colors cursor-default">
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
                    Athletic Hub is a dynamic sports event management platform that allows users to browse, filter, and register for different sports events. Admins can manage events, users, and view visual analytics through integrated Recharts.
                </p>

                {/* Links */}
                <p className="mb-4 text-gray-700 text-lg">
                    <strong>Live Site:</strong>{" "}
                    <a href="https://athletic-hub-7dbfe.web.app/" target="_blank" rel="noreferrer" className="link link-primary hover:underline">
                        Visit Website
                    </a>
                </p>

                <p className="mb-4 text-gray-700 text-lg">
                    <strong>Client Code:</strong>{" "}
                    <a href="https://github.com/md-arifur-rahman09/Athletic-Hub-client" target="_blank" rel="noreferrer" className="link link-primary hover:underline">
                        GitHub Repo
                    </a>
                </p>

                {/* Challenges */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">⚠️ Challenges Faced</h3>
                    <p className="mb-4 text-gray-700 text-lg leading-relaxed">
                        Filtering events by category and date, managing real-time UI state across user/admin dashboards, implementing secure authentication flows.
                    </p>
                </div>

                {/* Future Improvements */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">🚀 Future Improvements</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Add ticket payment system, event reminder notifications, and user badges based on participation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AthleticHub;
