import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import PopularClasses from '../PopularClasses/PopularClasses';
import ParentsReview from '../ParentsReview/ParentsReview';

const Home = () => {
    return (
        <div className=''>
            {/* Banner section */}
            <Banner/>

            {/* About Section */}
            <About/>

            {/* Popular Classes section */}
            <PopularClasses/>

            {/* Parent's Review */}
            <ParentsReview/>
        </div>
    );
};

export default Home;