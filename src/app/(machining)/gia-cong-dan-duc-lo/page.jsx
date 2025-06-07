/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Gia công đục lỗ",
  description: `Đai đục lỗ được sử dụng trong các nhà máy phun bi và phun cát, trong sàng để khử nước các vật liệu rời, để phân loại và tách vật liệu theo phân số, và cũng được sử dụng trên băng tải có cố định chân không vật liệu trên băng tải.`,
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
