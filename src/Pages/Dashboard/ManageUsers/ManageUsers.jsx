import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hook/useAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    
    const {data : users = [], refetch} = useQuery(['users'], async() => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method : 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method : 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }


    return (
        <div className='w-full px-6'>
            <h1 className='text-2xl font-medium text-center mb-4'>Manage Users : {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#2b3440] text-white rounded-lg text-lg'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => 
                            <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin' :  <button onClick={() => handleMakeAdmin(user)} className=' mr-2 px-6 py-2 border rounded-lg font-medium border-[#2b3440] '>Admin</button>
                                    }
                                    {
                                        user.role === 'instructor' ? 'Instructor' :  <button onClick={() => handleMakeInstructor(user)} className=' mx-2 px-6 py-2 border rounded-lg font-medium border-[#2b3440] '>Instructor</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;

/*
<button className='px-6 py-2 border rounded-lg font-medium border-[#2b3440] '>Instructor</button>
*/