import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';

const HomeLayout = () => {



    return (
        <div>
            <nav >
                <Navbar  ></Navbar>
            </nav>
            <main className="pt-16  min-h-screen    
  bg-gradient-to-r from-[#e8f5e9] via-[#f1f8e9] to-[#e3f2fd] 
  dark:bg-gradient-to-r dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]">
                <Outlet />
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;