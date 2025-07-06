import React from 'react';

const About = () => {
    return (
        <section className="border-b-1 border-gray-300 transition-all duration-300 py-20 px-6 lg:px-20 min-h-[80vh] flex items-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-primary mb-6">👨‍💻 About Me</h2>

                <p className="text-lg text-base-content mb-4 text-justify">
                    Hello! I’m <span className="font-semibold text-secondary">Md Arifur Rahman</span>, a self-taught <span className="font-semibold">MERN Stack Developer</span> based in Bangladesh 🇧🇩. Though I graduated in Textile Engineering from BUTEX in 2018, my passion for technology started way back in childhood — I always dreamed of studying computer science and was fascinated by how digital things work.
                </p>

                <p className="text-lg text-base-content mb-4 text-justify">
                    After a brief period in business, I decided to pursue that childhood dream. Over the past 6 months, I’ve immersed myself in modern web technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. From long nights of debugging to successfully deploying full-stack apps, every challenge shaped me into a better developer.
                </p>

                <p className="text-lg text-base-content mb-4 text-justify">
                    A big part of my journey was guided by {" "}

                    <a
                        href='https://www.programming-hero.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="font-semibold text-secondary underline"
                    >
                        Programming Hero
                    </a> {" "}

                    — a platform that provided me with not just technical training, but also constant motivation and real-world project-building experience. Their structured roadmap, hands-on projects, and continuous guidance helped me stay on track and become confident as a developer.
                </p>

                <p className="text-lg text-base-content mb-4 text-justify">
                    I’ve built real-world projects like {" "}
                    <a
                        href="https://bonsai-world-6feec.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline hover:text-primary"
                    >
                        Flora Nest
                    </a> {" "}
                    — a flower plant booking platform, and {" "}
                    <a
                        href="https://athletic-hub-7dbfe.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline  hover:text-primary"
                    >
                        Athletic Hub
                    </a>  {" "}
                    — an event management app. I enjoy solving problems, creating clean UI, and building full-stack features from scratch.
                </p>


                <p className="text-lg text-base-content mb-4 text-justify">
                    Outside of code, I’m a big fan of nature. I love planting trees and going fishing — activities that keep me calm, focused, and patient — just like coding does. I value consistency, curiosity, and creative thinking.
                </p>

                <p className="text-lg text-base-content text-justify">
                    I’m now looking to join a dynamic team where I can grow, contribute, and make meaningful digital experiences. Let’s build something impactful together!
                </p>
            </div>
        </section>
    );
};

export default About;
