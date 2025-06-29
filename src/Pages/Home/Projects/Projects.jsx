import React from 'react';
import { Link } from 'react-router'; 

const projects = [
    {
        id: 1,
        name: 'Flora Nest',
        image: 'https://i.postimg.cc/ZK4t8Kxc/flora-nest.jpg',
        path: '/projects/flora-nest',
        description: 'Plant & bonsai booking app with Firebase Auth, admin features, and modern UI.'
    },
    {
        id: 2,
        name: 'Athletic Hub',
        image: 'https://i.postimg.cc/MGch6czW/athletic-hub.jpg',
        path: '/projects/athletic-hub',
        description: 'Sports event platform with category filtering, dashboards, and analytics.'
    },
    {
        id: 3,
        name: 'Event Explorer',
        image: 'https://i.ibb.co/pRJ1K45/event-explorer.png',
        path: '/projects/event-explorer',
        description: 'An event-based web app built with React-Firebase and dynamic routing.'
    },
];

const Projects = () => {
    return (
        <section className="bg-base-200 py-16 px-6 lg:px-20 bg-gradient-to-r from-[#e8f5e9] via-[#f1f8e9] to-[#e3f2fd]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-primary mb-10 text-center">🚀 My Projects</h2>

                <div className="space-y-8">
                    {projects.map(project => (
                        <Link
                            key={project.id}
                            to={project.path}
                            className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md rounded-lg overflow-hidden 
                                       transform transition-transform duration-300 hover:scale-110 hover:shadow-lg group"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full md:w-1/3 h-64 object-cover object-center p-2 shadow-2xl"
                            />

                            {/* Project Info */}
                            <div className="p-4 text-left md:w-2/3">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
