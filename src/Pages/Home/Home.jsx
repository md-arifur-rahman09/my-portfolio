import React from 'react';
import Hero from './Hero';
import About from '../About/About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects/Projects';
import Contact from '../Contact/Contact';
// import Projects from './Projects/Projects';





const Home = () => {
    return (
        <div>
            <section>
                <Hero />
            </section>

            <section className="min-h-[70vh]">
                <About />
            </section>

            <section>
                <Skills />
            </section>

            <section>
                <Education />
            </section>

        <section>
                <Projects />
            </section>

            <section className="min-h-[70vh] ">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
