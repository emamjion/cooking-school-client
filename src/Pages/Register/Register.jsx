import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const { createUser, updateProfileUser } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            updateProfileUser(data.name, data.photo)
            .then(() => {
                Swal.fire('User has been created!');
                reset();
                navigate('/login');
            })
            .catch(error => console.error(error.message))
        })
        .catch(error => {
            console.error(error.message);
        })
    };
    
    return (
        <div className='bg-sky-100 p-12 mt-24'>
            <h1 className='text-center text-3xl font-semibold'>Register</h1>
            <div className='mt-6 bg-white p-12 w-1/2 mx-auto shadow-xl rounded'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <span className='text-lg font-medium block mb-1'>Name</span>
                        <input 
                            className='border-2 px-4 py-2 rounded w-full' 
                            type="text" 
                            placeholder='Enter Your Name' 
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className='text-red-400 font-medium'>Name field is required</span>}
                    </div>
                    <div className='mt-4'>
                        <span className='text-lg font-medium block mb-1'>Photo URL</span>
                        <input 
                            className='border-2 px-4 py-2 rounded w-full' 
                            type="text" 
                            placeholder='Enter Your Photo URL' 
                            {...register("photo", { required: true })}
                        />
                        {errors.photo && <span className='text-red-400 font-medium'>Photo field is required</span>}
                    </div>
                    <div className='mt-4'>
                        <span className='text-lg font-medium block mb-1'>Email</span>
                        <input 
                            className='border-2 px-4 py-2 rounded w-full' 
                            type="email" 
                            placeholder='Enter Your email'
                            {...register("email", { required: true })} 
                        />
                        {errors.email && <span className='text-red-400 font-medium'>Email field is required</span>}
                    </div>
                    <div className='mt-4'>
                        <span className='text-lg font-medium block mb-1'>Password</span>
                        {/* TODO: pattern problem */}
                        <input 
                            className='border-2 px-4 py-2 rounded w-full' 
                            type='password' 
                            placeholder='Enter Your password'
                            {...register("password", { required: true,
                                minLength: 6,
                                pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
                            })} 
                        />
                        {errors.password?.type === 'minLength' && <p className='text-red-400 font-medium'>Password is less then 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-400 font-medium'>Password don't have a capital letter or Password don't have a Special character</p>}
                    </div>
                    <div className='mt-4'>
                        <span className='text-lg font-medium block mb-1'>Confirm Password</span>
                        <input 
                            className='border-2 px-4 py-2 rounded w-full' 
                            type='password'
                            placeholder='Enter Your confirm password' 
                            {...register("confirm", { required: true,
                                minLength: 6,
                                pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
                            })} 
                        />
                        {errors.confirm?.type === 'minLength' && <p className='text-red-400 font-medium'>Password must be less then 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-400 font-medium'>Password don't have a capital letter or Password don't have a Special character</p>}
                    </div>
                    <div className='mt-4 text-center'>
                        <input type="submit" value="Register" className='bg-slate-700 px-6 w-[180px] py-3 cursor-pointer text-white rounded font-medium' />
                    </div>
                </form>
                <div className='text-center mt-4'>
                    <p className='font-medium'>Already Have an Account? <Link className='text-[#3498db] font-semibold' to='/login'>Login</Link></p>
                </div>
                <SocialLogin/>
            </div>
        </div>
    );
};

export default Register;