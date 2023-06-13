import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => setInstructors(data))
    })
    
    return (
        <div className='my-24'>
            <h1 className='text-3xl font-medium text-center mb-6'>Instructors</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    instructors.map(instructor => <div key={instructor._id} className="card w-full h-[380px] bg-base-100 shadow-xl">
                    <figure><img src={instructor.image} alt="Instructor" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto">{instructor.name}</h2>
                        <p>{instructor.email}</p>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Instructors;