import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import banner1 from '../../../assets/Banner/banner-1.jpg'
import banner2 from '../../../assets/Banner/banner-2.jpg'
import banner3 from '../../../assets/Banner/banner-3.jpg'
import banner4 from '../../../assets/Banner/banner-4.jpg'
import banner5 from '../../../assets/Banner/banner-5.jpg'
import banner6 from '../../../assets/Banner/banner-6.jpg'

const Banner = () => {
    return (
        <div className='mt-6'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[600px]">
                <SwiperSlide className='relative'>
                    <img src={banner1} className='rounded-lg' />
                    <div className='h-full absolute left-0 bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='text-white space-y-7 ml-24'>
                            <h1 className='text-5xl font-Semibold'>Culinary Education</h1>
                            <p className=''>
                                A cooking summer camp school is a specialized program designed to <br /> provide children and teenagers with hands-on culinary experiences <br /> during their summer break. 
                            </p>
                            <button className='px-6 py-2 bg-slate-700  border-black rounded font-medium mt-6'>About More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={banner2} className='rounded-lg' />
                    <div className='h-full absolute left-0 bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='text-white space-y-7 ml-24'>
                            <h1 className='text-5xl font-Semibold'>Hands-on Experience</h1>
                            <p className=''>
                                Campers have the opportunity to get actively involved in the kitchen, <br /> preparing and cooking their meals under the guidance of experienced instructors. 
                            </p>
                            <button className='px-6 py-2 bg-slate-700  border-black rounded font-medium mt-6'>About More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={banner3} className='rounded-lg' />
                    <div className='h-full absolute left-0 bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='text-white space-y-7 ml-24'>
                            <h1 className='text-5xl font-Semibold'>Recipe Exploration</h1>
                            <p className=''>
                            Summer camp schools often focus on a particular theme or cuisine, <br /> allowing campers to explore diverse recipes from around the world. 
                            </p>
                            <button className='px-6 py-2 bg-slate-700  border-black rounded font-medium mt-6'>About More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={banner4} className='rounded-lg' />
                    <div className='h-full absolute left-0 bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='text-white space-y-7 ml-24'>
                            <h1 className='text-5xl font-Semibold'>Teamwork and Collaboration</h1>
                            <p className=''>
                                Cooking camps encourage teamwork and collaboration among participants. <br /> Campers often work together in groups to plan and execute meals, fostering <br /> communication skills, cooperation, and a sense of camaraderie.
                            </p>
                            <button className='px-6 py-2 bg-slate-700  border-black rounded font-medium mt-6'>About More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={banner5} className='rounded-lg' />
                    <div className='h-full absolute left-0 bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='text-white space-y-7 ml-24'>
                            <h1 className='text-5xl font-Semibold'>Culinary Competitions and Challenges</h1>
                            <p className=''>
                                To add excitement and friendly competition, cooking camps may organize <br /> culinary challenges or cooking competitions among campers.  
                            </p>
                            <button className='px-6 py-2 bg-slate-700  border-black rounded font-medium mt-6'>About More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={banner6} className='rounded-lg' />
                    <div className='h-full absolute left-0 bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='text-white space-y-7 ml-24'>
                            <h1 className='text-5xl font-Semibold'>Lifelong Memories and Skills</h1>
                            <p className=''>
                                Cooking summer camp schools create memorable experiences for campers, <br /> where they not only learn valuable cooking skills but also forge lasting friendships <br /> and develop a passion for culinary arts that may extend into adulthood.
                            </p>
                            <button className='px-6 py-2 bg-slate-700  border-black rounded font-medium mt-6'>About More</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;