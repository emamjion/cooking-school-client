import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useBooked from '../../Hook/UseBooked';

const ClassesCard = ({classesElem}) => {
    const { courseimg, coursename, instructorname, price, availableseat, _id } = classesElem;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useBooked();
    
    const handleBooked = item => {
        console.log(item);
        
        if(user && user.email) {
            const bookedItem = {
                itemId: _id,
                coursename,
                courseimg,
                availableseat,
                instructorname,
                price,
                email : user?.email

            }
            fetch('http://localhost:5000/booked', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(bookedItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Booked Done!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login for booked',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state : {from : location}});
                }
            })
        }

    }
    
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={courseimg} alt="course Img" className='w-[200px] h-[200px] rounded-lg mt-4' /></figure>
            <div className="card-body">
                <h2 className="card-title">{coursename}</h2>
                <p className='text-[#3498db] font-medium'>{instructorname}</p>
                <p>Price : ${price}</p>
                <p>Available Seat: {availableseat}</p>

                <div className="card-actions justify-center">
                    <button onClick={() => handleBooked(classesElem)} className="bg-slate-700 px-6 py-2 text-white rounded cursor-pointer font-medium">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;