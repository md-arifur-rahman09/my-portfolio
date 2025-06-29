import React from 'react';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub
} from 'react-icons/fa';
import {
    SiTailwindcss, SiMongodb, SiExpress, SiJavascript,
    SiFirebase, SiVercel, SiNetlify, SiPostman, SiJsonwebtokens
} from 'react-icons/si';
import Marquee from 'react-fast-marquee';

const SkillBox = ({ icon: Icon, name }) => (
    <div className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-40 bg-white shadow-lg rounded-xl m-4 hover:scale-120 transition-transform duration-300 hover:shadow-xl">
        <Icon className="text-5xl md:text-6xl text-primary" />
        <p className="text-base mt-2 font-semibold text-gray-700">{name}</p>
    </div>
);

const Skills = () => {
    const skills = [
        { icon: FaHtml5, name: 'HTML5' },
        { icon: FaCss3Alt, name: 'CSS3' },
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: FaReact, name: 'React.js' },
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: FaNodeJs, name: 'Node.js' },
        { icon: SiExpress, name: 'Express.js' },
        { icon: SiMongodb, name: 'MongoDB' },
        { icon: SiFirebase, name: 'Firebase' },
        { icon: SiVercel, name: 'Vercel' },
        { icon: SiNetlify, name: 'Netlify' },
        { icon: FaGithub, name: 'GitHub' },
        { icon: SiJsonwebtokens, name: 'JWT' },
    ];

    return (
        <section className="bg-gradient-to-r from-[#e8f5e9] via-[#f1f8e9] to-[#e3f2fd] py-16 px-4 sm:px-6 lg:px-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-primary text-center mb-10">🚀 My Skills</h2>

                <div className="overflow-hidden">
                    <Marquee pauseOnHover={true} speed={50} gradient={false}>
                        {skills.map((skill, index) => (
                            <SkillBox key={index} icon={skill.icon} name={skill.name} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Skills;
