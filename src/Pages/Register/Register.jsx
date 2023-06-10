import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [show, setShow] = useState(false);
    
    return (
        <div className='bg-sky-100 p-12'>
            <h1 className='text-center text-3xl font-semibold'>Register</h1>
            <div className='mt-6 bg-white p-12 w-1/2 mx-auto shadow-xl rounded'>
                <form>
                    <div>
                        <span className='text-lg font-medium block mb-1'>Name</span>
                        <input className='border-2 px-4 py-2 rounded w-full' type="text" placeholder='Enter Your Name' />
                    </div>
                    <div className='mt-4'>
                        <span className='text-lg font-medium block mb-1'>Photo URL</span>
                        <input className='border-2 px-4 py-2 rounded w-full' type="text" placeholder='Enter Your Photo URL' />
                    </div>
                    <div className='mt-4'>
                        <span className='text-lg font-medium block mb-1'>Email</span>
                        <input className='border-2 px-4 py-2 rounded w-full' type="email" placeholder='Enter Your email' />
                    </div>
                    <div className='mt-4'>
                        <span className='text-lg font-medium block mb-1'>Password</span>
                        <input className='border-2 px-4 py-2 rounded w-full' type="password" placeholder='Enter Your password' />
                        <span className='absolute right-[38%] mt-3 text-slate-500 text-lg'> < FaEye /> </span>
                    </div>
                    <div className='mt-4'>
                        <span className='text-lg font-medium block mb-1'>Confirm Password</span>
                        <input className='border-2 px-4 py-2 rounded w-full' type="password" placeholder='Enter Your confirm password' />
                        <span className='absolute right-[38%] mt-3 text-slate-500 text-lg'> < FaEye /> </span>
                    </div>
                    <div className='mt-4 text-center'>
                        <input type="submit" value="Register" className='bg-slate-700 px-6 w-[180px] py-3 cursor-pointer text-white rounded font-medium' />
                    </div>
                </form>
                <div className='text-center mt-4'>
                    <p className='font-medium'>Already Have an Account? <Link className='text-[#3498db] font-semibold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;