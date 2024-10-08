import React, { Fragment } from "react";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/UI/section/Home"), { ssr: false })
const About = dynamic(() => import("@/components/UI/section/About"), { ssr: false })
const Service = dynamic(() => import("@/components/UI/section/Service"), { ssr: false })
const Arival = dynamic(() => import("@/app/arival/Arival"), { ssr: false })
const Article = dynamic(() => import("@/app/article/page"), { ssr: false })

export default function page() {
  return <Fragment>
    <Home />
    <About />
    <Service />
    <Arival />
    <Article />
  </Fragment>;
}
