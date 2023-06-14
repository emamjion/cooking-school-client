import React, { useEffect, useState } from 'react';
import PopularClass from './PopularClass';

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch('https://cooking-school-server.vercel.app/class')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setPopularClasses(data);
        })
    }, [])
    
    return (
        <div>
            <h2 className='text-center font-semibold text-3xl'>Popular Classes</h2>
            <div className='w-60 mx-auto mb-6 h-1 bg-[#3498db]'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    popularClasses.slice(0,6).map(popularClass => <PopularClass
                        key={popularClass._id}
                        popularClass={popularClass}
                    />)
                }
            </div>
        </div>
    );
};

export default PopularClasses;