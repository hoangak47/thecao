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
  title: "Ngành gỗ",
  description: `Cho tất cả các ngành công nghiệp như Ngành sản xuất giày, Ngành gỗ, Ngành điện tử, Ngành in ấn - in hoa, Ngành bao bì, Ngành thực phẩm, Ngành thuốc lá, Ngành đá Granit, Ngành hàng không, Ngành thể thao... Với giá ưu đãi nhất hiện nay.`,
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
