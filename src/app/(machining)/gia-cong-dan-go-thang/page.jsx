/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Gia công dán gờ thẳng",
  description: `Trong nhiều ngành công nghiệp khác nhau, cần phải sử dụng băng tải,
            do đó, sử dụng các mặt cắt dọc hoặc ngang. Công ty chúng tôi cung
            cấp mua dây đai từ các nhà sản xuất băng tải tốt nhất.`,
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
