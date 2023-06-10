import React from 'react';
import errorImg from '../../assets/ErrorPage/error-page.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImg} />
            <div className='text-center'>
                <Link to='/'>
                    <button className='px-8 py-3 bg-slate-700 text-white font-medium text-xl rounded-lg'>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;