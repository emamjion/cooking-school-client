import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            Swal.fire({
                title: 'Login Successful',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });

            navigate(from, {replace: true});

        })
    }
    
    return (
        <div className='text-center'>
            <div className="divider my-8"></div>
            <button onClick={handleGoogleLogin} className='px-8 py-2 rounded-lg bg-[#3498db] flex items-center mx-auto text-white'> 
                <span className='mr-3'> < FaGoogle /> </span>
                <span className='font-medium'>Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;