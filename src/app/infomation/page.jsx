import Layout from "@/constants/layout/layout";
import Image from "next/image";
import React from "react";

import com from "@/assets/images/Com.jpg";
import Body_ from "@/constants/body/body2";
import Partner from "@/components/partners";
import partners from "@/assets/images/gold-partners.jpg";

import infomation1 from "@/assets/images/infomation (1).jpg";
import infomation2 from "@/assets/images/infomation (2).jpg";
import infomation3 from "@/assets/images/infomation (3).jpg";
import infomation4 from "@/assets/images/infomation (4).jpg";
import infomation5 from "@/assets/images/infomation (5).jpg";
import infomation6 from "@/assets/images/infomation (6).jpg";
import infomation7 from "@/assets/images/infomation (7).jpg";
import infomation8 from "@/assets/images/infomation (8).jpg";
import infomation9 from "@/assets/images/infomation (9).jpg";
import ContenPage from "@/components/contentPage/contentPage";

const infomation = [
  {
    img: infomation1,
    title: "infomation 1",
  },
  {
    img: infomation2,
    title: "infomation 2",
  },
  {
    img: infomation3,
    title: "infomation 3",
  },
  {
    img: infomation4,
    title: "infomation 4",
  },
  {
    img: infomation5,
    title: "infomation 5",
  },
  {
    img: infomation6,
    title: "infomation 6",
  },
  {
    img: infomation7,
    title: "infomation 7",
  },
  {
    img: infomation8,
    title: "infomation 8",
  },
  {
    img: infomation9,
    title: "infomation 9",
  },
];

export default function Infomation() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Image src={com} alt="infomation" className="w-full" />
      </div>
      <Body_>
        <ContenPage />
      </Body_>

      <Image src={partners} alt="infomation" className="w-44 flex mx-auto" />
      <Partner partner={true}></Partner>
      <Partner partner={true} data={infomation} className="mb-8"></Partner>
    </Layout>
  );
}
