import React from 'react';
import { Zoom } from "react-awesome-reveal";

const PopularInstructor = ({popularInstructor}) => {
    const { name, email, image } = popularInstructor;
    
    return (
        <Zoom>
            <div className="card w-full h-[380px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Popular Instructor" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Zoom>
    );
};

export default PopularInstructor;