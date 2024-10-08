"use client"

import React, { useState, useEffect } from 'react'

import { fetchProduk } from "@/api/fetchProduk";

import { produkProps } from "@/utils/types";

import "@/components/sass/page.scss";

import Link from 'next/link';

import { baseUrl } from '@/utils/config';

import Image from 'next/image';

import { bannerProduk } from "@/components/UI/data/data";

export default function Produk() {
    const [produk, setProduk] = useState<produkProps[]>([]);

    useEffect(() => {
        fetchProduk().then(setProduk);
    }, []);

    return (
        <section className='produk'>
            <div className="produk__container container">
                <div className="banner">
                    {
                        bannerProduk.map((item) => {
                            return (
                                <Image src={item.img} alt='banner' quality={100} key={item.id} />
                            )
                        })
                    }
                </div>

                <div className="content">
                    {
                        produk.map((item) => {
                            return (
                                <Link className="box" href={`/produk/${item.category}`} key={item.id}>
                                    <h3>{item.category}</h3>

                                    <div className="img">
                                        <Image src={baseUrl + item.image.url} alt='image' width={Number(item.image.width)} height={Number(item.image.height)} loading='lazy' quality={100} />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
