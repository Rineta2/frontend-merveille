"use client";

import React, { useState, useEffect } from 'react';

import { fetchArival } from "@/api/fetchArival";

import Image from 'next/image';

import { arivalProps } from "@/utils/types";

import { baseUrl } from '@/utils/config';

import Link from 'next/link';

export default function Arival() {
    const [arival, setArival] = useState<arivalProps[]>([]);

    useEffect(() => {
        fetchArival().then(setArival);
    }, []);

    return (
        <section className="arival">
            <div className="arival__container container">
                <div className="heading">
                    <h1>New Arrivals</h1>
                </div>

                <div className="content">
                    {
                        arival.map((item) => {
                            return (
                                <div className="box" key={item.id}>
                                    <div className="img">
                                        <div className="d">
                                            <Image src={baseUrl + item.thumbnail.url} alt='image' width={Number(item.thumbnail.width)} height={Number(item.thumbnail.height)} loading='lazy' quality={100} />
                                        </div>

                                        <div className="b">
                                            <Image src={baseUrl + item.hover.url} alt='image' width={Number(item.hover.width)} height={Number(item.hover.height)} loading='lazy' quality={100} />
                                        </div>
                                    </div>

                                    <div className="text">
                                        <h1>{item.title}</h1>
                                        <span>Rp.{item.discount}</span>
                                    </div>

                                    <div className="btn">
                                        <Link href={`/arival/${item.category}${item.slug}`}>Lihat Details</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}
