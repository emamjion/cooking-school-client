import React from 'react';

const PopularInstructor = ({popularInstructor}) => {
    const { name, email, image } = popularInstructor;
    
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src="https://www.atptour.com/-/media/alias/player-headshot/RE44" alt="Popular Instructor" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default PopularInstructor;