"use client";

import React, { Fragment } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { sliderHome } from "@/components/UI/data/data"

import Image from 'next/image';

export default function Swipper() {
    return (
        <Fragment>
            <Swiper pagination={{ dynamicBullets: true, }}
                modules={[Pagination, Keyboard, Autoplay]}
                keyboard={{ enabled: true, }}
                slidesPerView={1}
                spaceBetween={30}
                loop
                speed={2000}
                effect='fade'
                autoplay={{ delay: 2500, disableOnInteraction: false, }}
                className="swipper" mousewheel>
                {
                    sliderHome.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="desktop">
                                <Image src={item.img} alt={item.name} quality={100} loading='lazy' />
                            </div>

                            <div className="mobile">
                                <Image src={item.mobile} alt={item.name} quality={100} loading='lazy' />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Fragment>
    );
}
