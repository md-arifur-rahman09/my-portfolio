import React  from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';

const HomeLayout = () => {



    return (
        <div>
            <nav >
                <Navbar  ></Navbar>
            </nav>
            <main className='pt-16 bg-gradient-to-r 
    from-[#e8f5e9] via-[#f1f8e9] to-[#e3f2fd]'>
            <Outlet ></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;