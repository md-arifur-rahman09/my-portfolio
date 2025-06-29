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
            <section >
              <Hero ></Hero>
            </section>
            <section>
                <About></About>
            </section>
            <section>
                <Skills></Skills>
            </section>
            <section>
                <Education></Education>
            </section>
            <section>
                <Projects></Projects>
            </section>
            <section >
                <Contact></Contact>
            </section>
         
        </div>
    );
};

export default Home;