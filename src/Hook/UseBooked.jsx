import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const useBooked = () => {
    const { user } = useContext(AuthContext);
    const { isLoading, refetch, data : booked = [] } = useQuery({
        queryKey: ['booked', user?.email],
        queryFn: async() => {
            const response = await fetch(`http://localhost:5000/booked?email=${user?.email}`);
            return response.json();
        },
    })

    return [ booked, refetch ];
}
export default useBooked;