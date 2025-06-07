/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Băng tải PVC",
  description:
    "Băng tải PVC là loại băng tải cơ bản, phổ biến nhất và giá cả phải chăng nhất. Chúng nhẹ, mạnh mẽ, dễ kết nối. Chúng vượt trội về sức mạnh, độ bền và tuổi thọ lâu dài.",
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <ContenPage />

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetData />
      </Body_>
    </Layout>
  );
}
