import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hook/useAdmin';
import useInstructor from '../Hook/useInstructor';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [ isAdmin, isAdminLoading] = useAdmin();
    const [ isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();
    if(loading || isAdminLoading || isInstructorLoading ){
        return (
            <div className='text-center my-24'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
    if(user && isAdmin || user && isInstructor){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;