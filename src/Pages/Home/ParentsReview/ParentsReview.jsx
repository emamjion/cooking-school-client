import React from 'react';
import { FaStar } from 'react-icons/fa';
import parent1 from '../../../assets/ParentReview/parent-1.png'
import parent2 from '../../../assets/ParentReview/parent-2.png'
import parent3 from '../../../assets/ParentReview/parent-3.png'

const ParentsReview = () => {
    return (
        <div className='my-24'>
            <div>
                <h2 className='text-center font-semibold text-3xl'>Parent's Review</h2>
                <div className='w-56 mx-auto mb-4 h-1 bg-[#3498db]'></div>
            </div>
            <div className='flex items-center justify-center gap-6'>
                <div className='shadow-xl p-6 h-[490px] rounded-lg'>
                    <img className='mx-auto rounded-lg' src={parent1} />
                    <div className='mt-3 text-center'>
                        <h2 className='text-xl font-medium mb-2'>A Culinary Adventure for Young Chefs!</h2>
                        <p>
                            My child came home every day with a new recipe to share and a newfound appreciation for the culinary arts. This camp exceeded all our expectations, and I highly recommend it to any aspiring young chef!
                        </p>
                    </div>
                        <div className='flex items-center p-6 justify-between'>
                            <div>
                                <h1 className='text-xl font-medium'>Imran Jahin</h1>
                                <p>Happy Parent!</p>
                            </div>
                            <div className='flex items-center flex-row'>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                            </div>
                        </div>
                    </div>
                <div className='shadow-xl p-6 h-[490px] rounded-lg'>
                    <img className='mx-auto rounded-lg' src={parent2} />
                    <div className='mt-3 text-center'>
                        <h2 className='text-xl font-medium mb-2'>An Unforgettable Culinary Journey!</h2>
                        <p>
                            My child recently completed a cooking summer camp that left a lasting impression. The camp organizers truly went above and beyond to create an immersive and educational experience. 
                        </p>
                    </div>
                    <div className='flex items-center p-6 justify-between'>
                            <div>
                                <h1 className='text-xl font-medium'>Burak Khan</h1>
                                <p>Happy Parent!</p>
                            </div>
                            <div className='flex items-center flex-row'>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                            </div>
                        </div>
                </div>
                <div className='shadow-xl p-6 h-[490px] rounded-lg'>
                    <img className='mx-auto rounded-lg' src={parent3} />
                    <div className='mt-3 text-center'>
                        <h2 className='text-xl font-medium mb-2'>A Fun-Filled Foodie Adventure!</h2>
                        <p>
                            My child had an absolute blast at the cooking summer camp they attended. The camp organizers did a fantastic job of making the sessions interactive and enjoyable for all the kids. 
                        </p>
                    </div>
                    <div className='flex items-center p-6 justify-between'>
                            <div>
                                <h1 className='text-xl font-medium'>Yammi Jahan</h1>
                                <p>Happy Parent!</p>
                            </div>
                            <div className='flex items-center flex-row'>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                                <span className='text-[#3498db]'> < FaStar /> </span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ParentsReview;