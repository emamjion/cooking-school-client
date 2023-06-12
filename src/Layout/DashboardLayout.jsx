import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBookmark, FaWallet, FaArchive, FaHome, FaUserGraduate, FaReadme } from 'react-icons/fa';
import useBooked from '../Hook/UseBooked';

const DashboardLayout = () => {
    const [booked] = useBooked();
    
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
                        <NavLink to='/dashboard/user-home'>
                            <span className=''> < FaHome /> </span>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/selected-class'>
                            <span className=''> < FaBookmark /> </span>
                            My Selected Classes
                            <div className="badge badge-neutral">+{booked?.length || 0}</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment-history'>
                            <span className=''> < FaWallet /> </span>
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='enrolled-class'>
                            <span className=''> < FaArchive /> </span>
                            My Enrolled Classes
                        </NavLink>
                    </li>
                    <div className="divider"></div>

                    <li>
                        <NavLink to='/'>
                            <span className=''> < FaHome /> </span>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/instructors'>
                            <span className=''> < FaUserGraduate /> </span>
                            Instructors
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/classes'>
                            <span className=''> < FaReadme /> </span>
                            Classes
                        </NavLink>
                    </li>
                </ul>
            
            </div>
        </div>
    );
};

export default DashboardLayout;