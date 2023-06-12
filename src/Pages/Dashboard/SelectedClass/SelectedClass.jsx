import React from 'react';
import useBooked from '../../../Hook/UseBooked';
import { FaTrashAlt, FaWallet } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SelectedClass = () => {
    const [ booked, refetch ] = useBooked();
    const handleDelete = (book) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/booked/${book._id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your selected course has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }
    
    return (
        <div className='w-full px-6'>
            <h1 className='text-2xl font-medium text-center mb-4'>My Selected Class : {booked.length}</h1>
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
                                <th>Pay</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            booked.map(( book, index )=> <tr
                                key={book._id}
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
                                            <img src={book.courseimg} />
                                        </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{book.coursename}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {book?.instructorname}
                                <br/>
                                <span className="badge badge-ghost badge-sm">{book.email}</span>
                                </td>
                                <td>{book.availableseat}</td>
                                <td className='text-end'>
                                    ${book.price}
                                </td>
                                <td>
                                    <button className='btn btn-lg'> < FaWallet /> </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(book)} className='btn btn-lg'> < FaTrashAlt /> </button>
                                </td>
                            </tr>)
                        }
                        </tbody>
                        
                    </table>
                </div>
            </div>
    );
};

export default SelectedClass;