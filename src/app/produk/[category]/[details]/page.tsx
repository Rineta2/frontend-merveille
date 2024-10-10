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
                <div className="content">
                    {details.map((item) => (
                        <div className="swipper__content" key={item.id}>
                            <SwiperSlider
                                slider={item.slider}
                                setThumbsSwiper={setThumbsSwiper}
                                thumbsSwiper={thumbsSwiper}
                            />
                        </div>
                    ))}

                    <div className="form">
                        {
                            details.map((item) => {
                                return (
                                    <form className="box" key={item.id} method="post'">

                                        <div className="title">
                                            <input type='text' value={item.title} readOnly />
                                        </div>

                                        <div className="stock">
                                            <h4>Stock:</h4>
                                            <input type='text' value={item.stock} readOnly />
                                        </div>

                                        <div className="price">
                                            <label>Rp. <input type='number' value={item.discount} readOnly /></label>
                                            <span><del>Rp. {item.price}</del></span>
                                        </div>

                                        <div className="size">
                                            <h4>Select Size:</h4>
                                            <div className='box__list'>
                                                {Array.isArray(item.size.sizes) ? (
                                                    item.size.sizes.map((sizeOption: { size: string }, index: number) => (
                                                        <input type="text" key={index} value={sizeOption.size} readOnly />
                                                    ))
                                                ) : (
                                                    <li>No sizes available</li>
                                                )}
                                            </div>
                                        </div>


                                        <div className="quantity">
                                            <label>Quantity</label>
                                            <input type="number" min={1} max={item.stock} defaultValue={1} />
                                        </div>

                                        <div className="btn">
                                            <button type='submit'>Add to cart</button>
                                        </div>
                                    </form>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </section >
    );
}
