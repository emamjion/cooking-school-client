import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../Hook/useInstructor';

const InstructorRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [ isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();
    if(loading || isInstructorLoading ){
        return (
            <div className='text-center my-24'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
    if(user && isInstructor){
        return children;
    }
    return <Navigate to='/' state={{from : location}} replace></Navigate>
};

export default InstructorRoute;