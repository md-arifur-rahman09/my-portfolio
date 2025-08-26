import React from 'react';
import { PiProjectorScreenLight } from 'react-icons/pi';
import { TbWorldWww } from 'react-icons/tb';
import { Link } from 'react-router';
import { useTitle } from '../../../hooks/UseTitle';
;

const projects = [
       {
        id: 1,
        name: 'Study Mate',
        image: 'https://i.postimg.cc/wjCh6Ydq/study-mate.jpg',
        path: '/projects/study-mate',
        description:
            'StudyMate – A collaborative learning platform with role-based dashboards for students, tutors, and admins. Features include session booking, study materials, notes management, payments, and advanced admin controls.',
    },
    {
        id: 2,
        name: 'Flora Nest',
        image: 'https://i.postimg.cc/ZK4t8Kxc/flora-nest.jpg',
        path: '/projects/flora-nest',
        description:
            'Plant & bonsai booking app with Firebase Auth, admin features, and modern UI.',
    },
    {
        id: 3,
        name: 'Athletic Hub',
        image: 'https://i.postimg.cc/MGch6czW/athletic-hub.jpg',
        path: '/projects/athletic-hub',
        description:
            'Sports event platform with category filtering, dashboards, and analytics.',
    },
    {
        id: 4,
        name: 'The EPL Hub',
        image: 'https://i.postimg.cc/7Yp4J1JX/the-EPL-hub.jpg',
        path: '/projects/the-epl-hub',
        description:
            'An interactive sports event platform based on the English Premier League, featuring user-auth, team-wise filtering, and dynamic routing.',
    },
];

const Projects = () => {
    useTitle("Projects")
    return (
        <section className=" py-16 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold flex justify-center text-primary mb-10">
                    <span className="flex items-center justify-center mr-3 text-fuchsia-700">
                        <TbWorldWww />
                    </span>
                    My Projects
                </h2>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={project.path}
                            className="flex flex-col md:flex-row items-center gap-6 
                         bg-base-100 shadow-md rounded-lg overflow-hidden 
                         transform transition-transform duration-300 
                         hover:scale-105 hover:shadow-lg group
                         dark:bg-[#111827] dark:border dark:border-gray-700 
                         dark:hover:border-fuchsia-600 dark:shadow-lg"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full md:w-1/3 h-56 object-cover object-center p-2 shadow-2xl"
                            />

                            <div className="p-4 text-left md:w-2/3">
                                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-primary transition">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
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
