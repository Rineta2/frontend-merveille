import React from "react";

import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/hooks/section/swipper/Slider"), {
  ssr: false,
});

import "@/components/sass/page.scss";

export default function Home() {
  return <section className="home">
    <div className="home__container container">
      <Slider />
    </div>
  </section>;
}
