/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Gia công dán bèo",
  description: `Nếu bạn có nhu cầu kết hợp vận chuyển hàng hóa theo chiều dọc và chiều ngang, hãy chú ý đến băng tải có tấm tôn. Tấm tôn ngăn chặn hàng hóa bị lăn hoặc tràn. `,
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
