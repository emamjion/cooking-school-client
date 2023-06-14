import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';


const AddClass = () => { 
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);

        /*
        const formData = new FormData();
        formData.append('courseimg', data.courseimg[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            console.log(imgRes);
        })
        */

        const { coursename,price,courseimg,instructorname,instructoremail,availableseat} = data;
        const newCourse = {
            coursename,
            price: parseFloat(price),
            courseimg,
            instructorname,
            instructoremail,
            availableseat,
            status : 'pending'
        }
        console.log(newCourse);
        axiosSecure.post('/class', newCourse)
        .then(data => {
            console.log('after posting new course', data.data);
            if(data.data.insertedId){
                reset();
                Swal.fire({
                    position: 'centet',
                    icon: 'success',
                    title: 'Your course has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    };
    return (
        <div className='w-full px-6'>
            <h1 className='text-3xl font-medium mb-4'>Add a Class</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-6 bg-[#f2f2f2] p-8 mb-6'>
                <div className='mb-6'>
                    <span className='text-xl font-medium mb-2 block'>Class Name</span>
                    <input 
                        className='px-4 py-2 w-full rounded' 
                        type="text" 
                        placeholder='Class Name'
                        {...register("coursename", {required: true})}
                    />
                </div>
                <div className='mb-6'>
                    <span className='text-xl font-medium mb-2 block'>Class Image</span>
                    <input 
                        className='px-4 py-2 w-full rounded' 
                        type="text" 
                        placeholder='Class Image URL'
                        {...register("courseimg", {required: true})}
                    />
                </div>
                <div className='mb-6 flex items-center gap-6'>
                    <div className=" w-1/2">
                        <div className=''>
                            <span className='text-xl font-medium mb-2 block'>Instructor Name</span>
                            <input 
                                className='px-4 py-2 w-full rounded' 
                                type="text" 
                                placeholder='Instructor Name'
                                readOnly
                                {...register("instructorname", {required: true})}
                                defaultValue={user?.displayName}

                            />
                        </div>
                    </div>
                    <div className=' w-1/2'>
                        <span className='text-xl font-medium mb-2 block'>Instructor Email</span>
                        <input 
                            className='px-4 py-2 w-full rounded' 
                            type="email"
                            readOnly
                            defaultValue={user?.email}
                            placeholder='Instructor Email'
                            {...register("instructoremail", {required: true})}
                        />
                    </div>
                </div>
                <div className='mb-6 flex items-center gap-6'>
                    <div className="form-control w-1/2">
                        <div className=''>
                            <span className='text-xl font-medium mb-2 block'>Available Seat</span>
                            <input 
                                className='px-4 py-2 w-full rounded' 
                                type="text" 
                                placeholder='Available Seat'
                                {...register("availableseat", {required: true})}
                            />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <span className='text-xl font-medium mb-2 block'>Price</span>
                        <input 
                            className='px-4 py-2 w-full rounded' 
                            type="text"
                            placeholder='Price'
                            {...register("price", {required: true})}
                        />
                    </div>
                </div>
                {/* <div>
                    <span className='text-xl font-medium mb-2 block'>Class Image</span>
                    <input 
                        type="file" 
                        className="file-input w-full max-w-xs"
                        {...register("courseimg", {required: true})}
                    />
                </div> */}
                <div className='mt-6 pb-6'>
                    <input 
                        className='bg-slate-700 px-6 py-2 text-white rounded cursor-pointer font-medium' 
                        type="submit" 
                        value="Add Class" 
                    />
                </div>
            </form>
        </div>
    );
};

export default AddClass;