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
    <div className="flex-shrink-0 flex flex-col items-center justify-center 
                  w-28 sm:w-32 md:w-36 lg:w-40 h-28 sm:h-32 md:h-36 lg:h-40 
                  bg-white dark:bg-[#1f2937] dark:border dark:border-gray-700 
                  shadow-lg dark:shadow-md rounded-xl 
                  m-2 sm:m-3 md:m-4 
                  hover:scale-110 transition-transform duration-300 
                  hover:shadow-2xl dark:hover:shadow-fuchsia-700/30">
        <Icon className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary dark:text-fuchsia-400" />
        <p className="text-sm sm:text-base md:text-base lg:text-lg mt-2 font-semibold text-gray-700 dark:text-gray-200">
            {name}
        </p>
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
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10 ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8 sm:mb-10">🤹‍♂️ My Skills</h2>

                <div className="overflow-hidden">
                    <Marquee pauseOnHover={true} speed={50} gradient={false}>
                        {skills.map((skill, index) => (
                            <SkillBox key={index} icon={skill.icon} name={skill.name} />
                        ))}
                    </Marquee>
                </div>
            </div>
            <style>{`
                @keyframes gradientAnimation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-bg {
                    background: linear-gradient(45deg, #e8f5e9, #f1f8e9, #e3f2fd, #e1f5fe);
                    background-size: 200% 200%;
                    animation: gradientAnimation 15s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default Skills;