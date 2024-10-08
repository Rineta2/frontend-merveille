import React from 'react'

import dynamic from 'next/dynamic'

const ImagesComponents = dynamic(() => import("@/components/hooks/section/about/ImagesComponents"), { ssr: false });
const Heading = dynamic(() => import("@/components/hooks/section/about/Heading"), { ssr: false });

export default function About() {
    return (
        <section className='about'>
            <div className="about__container container">
                <div className="img">
                    <ImagesComponents />
                </div>

                <div className="heading">
                    <Heading />
                </div>
            </div>
        </section>
    )
}
