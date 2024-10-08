import React, { Fragment } from 'react'

import { aboutData } from "@/components/UI/data/data";

import Image from 'next/image';

export default function ImagesComponents() {
    return (
        <Fragment>
            {
                aboutData.map((item) => {
                    return (
                        <Image src={item.img} alt='about' quality={100} loading='lazy' key={item.id} />
                    )
                })
            }
        </Fragment>
    )
}
