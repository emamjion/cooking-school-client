import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';

const AllClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/class')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setClasses(data);
        })
    }, [])
    
    return (
        <div className='mt-12'>
            <div className='text-center'>
                <h1 className='text-3xl font-medium mb-4'>All Classes : {classes.length}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    classes.map(classesElem => <ClassesCard
                        key={classesElem._id}
                        classesElem={classesElem}
                    />)
                }
            </div>
        </div>
    );
};

export default AllClasses;