import React, { useState } from 'react';
import BackButton from '../../button/BackButton';

const FloraNest = () => {
    const [scale, setScale] = useState(1);

    const handleDoubleClick = () => {
        setScale(scale === 1.3 ? 1 : 1.3);
    };

    const features = [
        "Explore plant & bonsai collections with rich details",
        "Book appointments with sellers easily",
        "Role-based access with admin control panel"
    ];

    const techStack = [
        "React",
        "Tailwind CSS",
        "Firebase Auth",
        "DaisyUI",
        "Express.js",
        "MongoDB"
    ];

    return (
        <section className="bg-base-100 py-16 px-6 lg:px-20 mb-10 lg:mb-20">
            <BackButton></BackButton>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-6">🌿 Flora Nest</h2>

                <div
                    onDoubleClick={handleDoubleClick}
                    className="transition-transform duration-300 ease-in-out cursor-pointer w-fit mx-auto"
                    style={{ transform: `scale(${scale})` }}
                >
                    <img
                        src="https://i.postimg.cc/ZK4t8Kxc/flora-nest.jpg"
                        alt="Flora Nest"
                    className="rounded-lg mb-8 shadow-lg"
                    />
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
                    Flora Nest is a plant and bonsai booking platform where users can explore collections, book appointments, and contact sellers. Built with authentication, routing, dynamic UI, and admin control.
                </p>

                {/* Links */}
                <p className="mb-4 text-gray-700 text-lg">
                    <strong>Live Site:</strong>{" "}
                    <a href="https://bonsai-world-6feec.web.app/" target="_blank" rel="noreferrer" className="link link-primary hover:underline">
                        Visit Website
                    </a>
                </p>

                <p className="mb-4 text-gray-700 text-lg">
                    <strong>Client Code:</strong>{" "}
                    <a href="https://github.com/md-arifur-rahman09/" target="_blank" rel="noreferrer" className="link link-primary hover:underline">
                        GitHub Repo
                    </a>
                </p>

                {/* Challenges */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">⚠️ Challenges Faced</h3>
                    <p className="mb-4 text-gray-700 text-lg leading-relaxed">
                        Managing conditional rendering, user roles, secure routing, and Firebase deployment configuration.
                    </p>
                </div>

                {/* Future Improvements */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">🚀 Future Improvements</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Adding wishlist system, integrating payment gateway, and implementing image optimization.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FloraNest;
