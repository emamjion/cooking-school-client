import React from 'react';
import { Zoom } from "react-awesome-reveal";

const PopularClass = ({popularClass}) => {
    const { courseimg, coursename, instructorname, price, availableseat, _id, enrolled } = popularClass;
    
    return (
        <Zoom>
            <div className="card w-full bg-base-100 h-[380px] shadow-xl">
                <figure><img src={courseimg} alt="course Img" className='w-[200px] h-[200px] rounded-lg mt-4' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{coursename}</h2>
                    <p className='text-[#3498db] font-medium'>{instructorname}</p>
                    <p>Price : ${price}</p>
                    <p>Available Seat: {availableseat}</p>
                    <p>Enrolled: {enrolled}</p>
                </div>
            </div>
        </Zoom>
    );
};

export default PopularClass;