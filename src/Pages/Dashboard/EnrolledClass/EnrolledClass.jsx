import React, { useEffect, useState } from 'react';

const EnrolledClass = () => {
    const [myEnrolled, setMyEnrolled] = useState([]);
    useEffect(() => {
        fetch('https://cooking-school-server.vercel.app/payments')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>Enrolled Class</h1>
        </div>
    );
};

export default EnrolledClass;