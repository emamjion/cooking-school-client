import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hook/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [ isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return (
            <div className='text-center my-24'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from : location}} replace></Navigate>
};

export default AdminRoute;