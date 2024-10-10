// components/ProdukDetails.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { getCurrentProdukDetails } from '@/components/hooks/page/produk/category/details/fetchData';
import { produkProps } from "@/utils/types";
import { Swiper as SwiperType } from 'swiper';
import { SwiperSlider } from '@/components/hooks/page/produk/category/details/SwiperSlider';
import "@/components/sass/page.scss";

export default function ProdukDetails() {
    const params = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [details, setDetails] = useState<produkProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const detailParam = Array.isArray(params.details) ? params.details[0] : params.details;
            const currentBlog = await getCurrentProdukDetails(detailParam);
            setDetails(currentBlog || []);
        };
        fetchData();
    }, [params.details]);

    return (
        <section className='product__details'>
            <div className="produkDetails__container container">
                {details.map((item) => (
                    <div className="box" key={item.id}>
                        <SwiperSlider
                            slider={item.slider}
                            setThumbsSwiper={setThumbsSwiper}
                            thumbsSwiper={thumbsSwiper}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
