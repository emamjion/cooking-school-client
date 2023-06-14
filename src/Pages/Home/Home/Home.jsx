import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import PopularClasses from '../PopularClasses/PopularClasses';
import ParentsReview from '../ParentsReview/ParentsReview';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div className='dark:bg-black dark:text-white'>            
            {/* Banner section */}
            <Banner/>

            {/* About Section */}
            <About/>

            {/* popular Instructors section */}
            <PopularInstructors/>
            {/* Popular Classes section */}
            <PopularClasses/>

            {/* Parent's Review */}
            <ParentsReview/>
        </div>
    );
};

export default Home;