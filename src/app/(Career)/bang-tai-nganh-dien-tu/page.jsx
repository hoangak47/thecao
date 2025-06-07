/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Ngành điện tử",
  description: `CÔNG TY THẾ CAO chuyên sản suất và cung cấp trên toàn quốc Băng tải PVC - PU - PE, băng tải chịu nhiệt, băng tải lưới nhựa, băng tải xích nhựa, băng tải xích inox, băng tải cao su, dây đai dẹt, dây curoa, dây đai răng, Nẹp móc nối băng tải, ...`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <ContenPage />

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
