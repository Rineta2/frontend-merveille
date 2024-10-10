import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import Image from 'next/image';

import { baseUrl } from '@/utils/config';

import { produkProps } from "@/utils/types";

import type { Swiper as SwiperType } from 'swiper';
import { Fragment } from 'react';

interface SwiperSliderProps {
    slider: produkProps['slider'];
    setThumbsSwiper: (swiper: SwiperType) => void;
    thumbsSwiper: SwiperType | null;
}

export const SwiperSlider = ({ slider, setThumbsSwiper, thumbsSwiper }: SwiperSliderProps) => (
    <Fragment>
        <Swiper
            className="priview"
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
        >
            {(Array.isArray(slider) ? slider : []).map((sliderItem) => (
                <SwiperSlide key={sliderItem.id}>
                    <Image
                        src={baseUrl + sliderItem.url}
                        alt={sliderItem.title}
                        width={Number(sliderItem.width)}
                        height={Number(sliderItem.height)}
                        loading='lazy'
                        quality={100}
                    />
                </SwiperSlide>
            ))}
        </Swiper>

        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper"
        >
            {(Array.isArray(slider) ? slider : []).map((sliderItem) => (
                <SwiperSlide key={sliderItem.id}>
                    <Image
                        src={baseUrl + sliderItem.url}
                        alt={sliderItem.title}
                        width={Number(sliderItem.width)}
                        height={Number(sliderItem.height)}
                        loading='lazy'
                        quality={100}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </Fragment>
);
