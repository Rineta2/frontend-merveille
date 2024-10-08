import React, { Fragment } from 'react'

import { aboutData } from "@/components/UI/data/data";

export default function Heading() {
    return (
        <Fragment>
            {
                aboutData.map((item) => {
                    return (
                        <div className="box" key={item.id}>
                            <div className="title">
                                <h1>{item.title}</h1>
                            </div>

                            <div className="desc">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
