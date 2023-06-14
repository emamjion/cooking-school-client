import React, { useEffect, useState } from 'react';

const MyClass = () => {
    const [myClasses, setMyClasses] = useState([]);
    useEffect(() => {
        fetch('https://cooking-school-server.vercel.app/class')
        .then(res => res.json())
        .then(data => {
            setMyClasses(data);
        })
    }, [])
    return (
        <div className='w-full px-6'>
            <h1 className='text-2xl font-medium text-center mb-4'>My Selected Class : {myClasses.length}</h1>
                <div className="overflow-x-auto rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead className=''>
                            <tr className='bg-[#2b3440] text-white rounded-lg text-lg'>
                                <th>
                                    <label>
                                        #
                                    </label>
                                </th>
                                <th>Course Title</th>
                                <th>Course Instructor</th>
                                <th>Available Seat</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Total Enrolled Student</th>
                                <th>Feedback</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            myClasses.map(( myClass, index )=> <tr
                                key={myClass._id}
                            >
                                <td>
                                    <label className='font-medium'>
                                        {index + 1}
                                    </label>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myClass.courseimg} />
                                        </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myClass.coursename}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myClass?.instructorname}
                                <br/>
                                <span className="badge badge-ghost badge-sm">{myClass?.instructoremail}</span>
                                </td>
                                <td>{myClass.availableseat}</td>
                                <td className='text-end'>
                                    ${myClass.price}
                                </td>
                                <td colSpan={3} className='flex items-center'>
                                    <button className='btn btn-sm'> {
                                    myClass.status 
                                    
                                    }  </button>
                                    <button className='btn btn-sm'> Approved </button>
                                    <button className='btn btn-sm'> Deny </button>
                                </td>
                                <td>{myClass.enrolled}</td>
                                <td>
                                    <button className='btn btn-sm'>Feedback </button>
                                </td>
                                <td>
                                    <button className='btn btn-sm'>Update </button>
                                </td>
                            </tr>)
                        }
                        </tbody>
                        
                    </table>
                </div>
        </div>
    );
};

export default MyClass;