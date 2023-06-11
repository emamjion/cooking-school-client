import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    
    // Toggle show and hide icon
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    return (
        <div className='bg-sky-100 p-12 mt-24'>
            <h1 className='text-center text-3xl font-semibold'>Login</h1>
            <div className='mt-6 bg-white p-12 w-1/2 mx-auto shadow-xl rounded'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span className='text-lg font-medium block mb-1'>Email</span>
                        <input className='border-2 px-4 py-2 rounded w-full' type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className='mt-4'>
                        <span className='text-lg font-medium block mb-1'>Password</span>
                        <input className='border-2 px-4 py-2 rounded w-full' type={show ? "text" : "password" } placeholder='Enter Your password' />
                        <span onClick={handleShow} className='cursor-pointer absolute right-[38%] mt-3 text-slate-500 text-lg'> {show ? <span> < FaEyeSlash /> </span> : <span> < FaEye /> </span>} </span>
                    </div>
                    <div className='mt-4 text-center'>
                        <input type="submit" value="Login" className='bg-slate-700 px-6 w-[180px] py-3 cursor-pointer text-white rounded font-medium' />
                    </div>
                </form>
                <div className='text-center mt-4'>
                    <p className='font-medium'>Don't Have an Account? <Link className='text-[#3498db] font-semibold' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;