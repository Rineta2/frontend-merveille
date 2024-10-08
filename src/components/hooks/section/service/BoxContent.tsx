import React, { Fragment } from 'react'

import { serviceBox } from "@/components/UI/data/data";

import Image from 'next/image';

export default function BoxContent() {
    return (
        <Fragment>
            {
                serviceBox.map((item) => {
                    return (
                        <div className="box" key={item.id}>
                            <div className="img">
                                <Image src={item.img} alt={item.name} quality={100} loading='lazy' />
                            </div>

                            <h3>{item.span}</h3>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
