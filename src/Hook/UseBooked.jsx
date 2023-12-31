import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useBooked = (id) => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data : booked = [] } = useQuery({
        queryKey: ['booked', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const response = await axiosSecure(`/booked?email=${user?.email}`);
            if(id){
                return response.data.filter(singleClass => singleClass._id == id);
            }
            return response.data;
        },
    })

    return [ booked, refetch ];
}
export default useBooked;