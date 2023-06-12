import React, { useEffect, useState } from 'react';
import PopularInstructor from './PopularInstructor';

const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructor')
        .then(res => res.json())
        .then(data => {
            setPopularInstructors(data);
        })
    }, [])
    
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h1 className='text-center font-semibold text-3xl'>Our Popular Instructors</h1>
                <div className='w-96 mx-auto mb-4 h-1 bg-[#3498db]'></div>
                <p className='text-lg'>
                    Cooking instructors are professionals who teach others how <br /> to cook and improve their culinary skills.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {
                    popularInstructors.map(popularInstructor => <PopularInstructor
                        key={popularInstructor._id}
                        popularInstructor={popularInstructor}
                    ></PopularInstructor>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;