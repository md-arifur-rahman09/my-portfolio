import React, { useRef } from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';

const HomeLayout = () => {



    return (
        <div>
            <nav >
                <Navbar  ></Navbar>
            </nav>
            <main className='pt-16'>
            <Outlet ></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;