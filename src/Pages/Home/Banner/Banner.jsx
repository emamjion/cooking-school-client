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
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[600px]">
                <SwiperSlide>
                    <img src={banner1} />
                    <div className='flex items-center '>
                    <h1 className='text-3xl font-bold'>Hello</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner6} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;