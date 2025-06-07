/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import Image from "next/image";
import React from "react";

import cn1 from "@/assets/images/products/HeatResistant/CN1.jpg";
import cn2 from "@/assets/images/products/HeatResistant/CN2.jpg";
import cn3 from "@/assets/images/products/HeatResistant/CN3.png";
import cn4 from "@/assets/images/products/HeatResistant/CN4.png";
import cn5 from "@/assets/images/products/HeatResistant/CN5.png";

import { GetData } from "@/components/getDataProduct/getData";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Chịu nhiệt",
  description:
    "Băng tải lưới teflon là gì: Băng tải lưới Teflon, còn được gọi là băng tải lưới PTFE, là một loại băng tải được sản xuất bằng sợi thủy tinh và được phủ màng chất liệu PTFE",
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
