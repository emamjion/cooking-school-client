import React from 'react';
import logo from '../../../assets/cooking-logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between shadow-xl px-6 py-3 h-[100px]'>
            <div className='flex items-center gap-2'>
                <img className='w-[80px] h-[80px]' src={logo} />
                <h2 className='text-3xl font-semibold'>Cooking Camp</h2>
            </div>
            <ul id='navlist'>
                <NavLink className='mr-6 font-semibold text-xl' to='/'>Home</NavLink>
                <NavLink className='mr-6 font-semibold text-xl' to='/dashboard'>Dashboard</NavLink>
                <NavLink className='mr-6 font-semibold text-xl' to='/instructor'>Instructor</NavLink>
                <NavLink className=' font-semibold text-xl' to='/classes'>Classes</NavLink>
            </ul>
            <div className='flex items-center'>
                <div className="w-10 rounded-full mr-8">
                    <img src='https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png' />
                </div>
                <Link to='/login'>
                    <button className='bg-slate-700 px-6 py-2 text-white rounded cursor-pointer font-medium'>Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;