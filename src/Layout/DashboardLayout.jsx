import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBookmark, FaWallet, FaArchive, FaHome, FaUserGraduate, FaReadme } from 'react-icons/fa';

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet/>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <h1 className='text-3xl font-medium mb-6'>Cooking Camp</h1>
                    {/* Sidebar content here */}
                    <li>
                        <Link to='selected-class'>
                            <span className=''> < FaHome /> </span>
                            User Home
                        </Link>
                    </li>
                    <li>
                        <Link to='selected-class'>
                            <span className=''> < FaBookmark /> </span>
                            My Selected Classes
                        </Link>
                    </li>
                    <li>
                        <Link to='selected-class'>
                            <span className=''> < FaWallet /> </span>
                            Payment History
                        </Link>
                    </li>
                    <li>
                        <Link to='selected-class'>
                            <span className=''> < FaArchive /> </span>
                            My Enrolled Classes
                        </Link>
                    </li>
                    <div className="divider"></div>

                    <li>
                        <Link to='/'>
                            <span className=''> < FaHome /> </span>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/instructors'>
                            <span className=''> < FaUserGraduate /> </span>
                            My Selected Classes
                        </Link>
                    </li>
                    <li>
                        <Link to='/classes'>
                            <span className=''> < FaReadme /> </span>
                            Classes
                        </Link>
                    </li>
                </ul>
            
            </div>
        </div>
    );
};

export default DashboardLayout;