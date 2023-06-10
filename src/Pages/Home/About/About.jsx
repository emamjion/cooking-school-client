import React from 'react';
import aboutImg from '../../../assets/About/about-pic.jpg'

const About = () => {
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h1 className='text-2xl text-[#3498db] font-semibold'>About Us</h1>
                <div className='w-28 mx-auto mb-4 h-1 bg-slate-700'></div>
                <p>
                    Cooking summer camps provide a nurturing and supportive environment for aspiring <br /> young chefs to explore their passion for cooking, gain valuable culinary skills.
                </p>
            </div>
            <div className='flex items-center justify-center mt-16 gap-6'>
                <div className='space-y-3'>
                    <h1 className='text-2xl font-semibold'>Why Choose Us</h1>
                    <p>
                        Camps often include specialized workshops where campers <br /> can delve into specific culinary areas like baking, pastry making, <br /> grilling, international cuisine, or vegetarian cooking. 
                    </p>
                    <button className='bg-slate-700 px-6 py-2 text-white rounded font-medium'>Read More</button>
                </div>
                <div className=''>
                    <img className='w-[400px] rounded-lg border-4' src={aboutImg} />
                </div>
            </div>
        </div>
    );
};

export default About;