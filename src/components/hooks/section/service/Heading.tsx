import React, { Fragment } from 'react'

import { serviceData } from "@/components/UI/data/data";

export default function Heading() {
    return (
        <Fragment>
            {
                serviceData.map((item) => {
                    return (
                        <div className="heading" key={item.id}>
                            <h1 key={item.id}>{item.title}</h1>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
