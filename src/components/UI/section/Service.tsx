import React from "react";

import dynamic from "next/dynamic";

const Heading = dynamic(() => import("@/components/hooks/section/service/Heading"), { ssr: false });
const BoxContent = dynamic(() => import("@/components/hooks/section/service/BoxContent"), { ssr: false });

export default function Service() {
  return <section className="services">
    <div className="services__container container">
      <Heading />

      <div className="content">
        <BoxContent />
      </div>
    </div>
  </section>;
}
