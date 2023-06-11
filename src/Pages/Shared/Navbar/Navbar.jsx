import React, { useContext } from 'react';
import logo from '../../../assets/cooking-logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.error(error.message))
    }
    return (
        <nav className='flex items-center justify-between shadow-xl px-6 py-3 h-[100px]'>
            <div className='flex items-center gap-2'>
                <img className='w-[80px] h-[80px]' src={logo} />
                <h2 className='text-3xl font-semibold'>Cooking Camp</h2>
            </div>
            <ul id='navlist'>
                <NavLink className='mr-6 font-semibold text-xl' to='/'>Home</NavLink>
                <NavLink className='mr-6 font-semibold text-xl' to='/dashboard'>Dashboard</NavLink>
                <NavLink className='mr-6 font-semibold text-xl' to='/instructors'>Instructors</NavLink>
                <NavLink className=' font-semibold text-xl' to='/classes'>Classes</NavLink>
            </ul>
            <div className='flex items-center'>
                {
                    user ? <>
                        <div className=" ml-12 mr-8 mt-3">
                            <img title={user?.displayName} src={user?.photoURL} className='w-[65px] h-[60px] rounded-full border-4 border-[#3498db]' />
                        </div>
                        <Link to='/login'>
                            <button onClick={handleLogOut} className='bg-slate-700 px-6 py-2 text-white rounded cursor-pointer font-medium'>Logout</button>
                        </Link>
                    </> : <>
                        <Link to='/login'>
                            <button className='bg-slate-700 px-6 py-2 text-white rounded cursor-pointer font-medium'>Login</button>
                        </Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Navbar;