import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login');
    const noHeaderFooter2 = location.pathname.includes('register');
    
    return (
        <div>
            { noHeaderFooter || noHeaderFooter2 || <Navbar/> }
            <Outlet/>
            { noHeaderFooter || noHeaderFooter2 || <Footer/> }
        </div>
    );
};

export default MainLayout;