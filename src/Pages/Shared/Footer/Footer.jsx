import React from 'react';
import logo from '../../../assets/cooking-logo.png'
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaTwitter  } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 shadow-xl bg-base-100 text-base-content mt-12">
                <div>
                    <img className='w-[120px] h-[120px]' src={logo} />
                    <h1 className='font-semibold text-2xl'>Cooking Camp</h1>
                    <p className=''>Providing reliable Learning</p>
                </div> 
                <div>
                    <span className="footer-title">Our Menu</span> 
                    <Link to='/' className="link link-hover">Home</Link> 
                    <Link to='/dashboard' className="link link-hover">Dashboard</Link> 
                    <Link to='/Instructor' className="link link-hover">Instructor</Link> 
                    <Link to='Classes' className="link link-hover">Classes</Link>
                </div> 
                <div>
                    <span className="footer-title">Our Classes</span> 
                    <a className="link link-hover">Professional Cooking</a> 
                    <a className="link link-hover">Shahi Cooking</a> 
                    <a className="link link-hover">Nobabi Cooking</a> 
                    <a className="link link-hover">Deshi Cooking</a>
                </div> 
                <div>
                    <span className="footer-title">Contact Us</span> 
                    <p>123, solt Home, Avineu Road, London</p>
                    <p>+123 456 789</p>
                    <h1 className="footer-title my-4">Social Address</h1>
                    <div className='flex items-center justify-center gap-8'>
                        <span className='text-xl'> < FaInstagram /> </span>
                        <span className='text-xl'> < FaLinkedinIn /> </span>
                        <span className='text-xl'> < FaTwitter /> </span>
                    </div>
                </div>
            </div>
            <div className='text-center bg-slate-600 p-5'>
                <p className='text-white font-medium text-xl'>Copyright &copy; Cooking Camp - 2023</p>
            </div>
        </footer>
    );
};

export default Footer;