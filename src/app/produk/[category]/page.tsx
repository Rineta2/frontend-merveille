"use client"

import React, { useState, useEffect } from 'react'

import Link from 'next/link'

import { baseUrl } from '@/utils/config';

import { fetchProduk } from "@/api/fetchProduk";

import { produkProps } from "@/utils/types";

import { useParams } from "next/navigation";

import Image from 'next/image';

export default function CategoryDetails() {

    const [category, setCategory] = useState<produkProps[]>([]);

    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProduk();
            const currentBlog = data.filter((category: produkProps) => category?.category === params.category);
            setCategory(currentBlog || null);
        };
        fetchData();
    }, [params.category]);

    return (
        <section className='category__details'>
            <div className="categorydetails__container">
                {
                    category.map((item) => {
                        return (
                            <div className="box" key={item.id}>
                                <div className="img">
                                    <Image src={baseUrl + item.image.url} alt={item.title} width={(Number(item.image.width))} height={(Number(item.image.height))} loading='lazy' quality={100} />
                                </div>

                                <div className="text">
                                    <h1>{item.title}</h1>

                                    <div className="price">
                                        <span>Rp. {item.price}</span>
                                        <span><del>Rp. {item.discount}</del></span>
                                    </div>

                                    <div className="btn">
                                        <Link className="box" href={`/produk/${item.category}/${item.details}`} key={item.id}>Lihat Details</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
