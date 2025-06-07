/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Băng tải PU đồng nhất (TPU)",
  description: `Băng tải PU Đồng Nhất (TPU) của
            chúng tôi tạo ra sự khác biệt đó. Nó cải thiện đáng kể an toàn thực
            phẩm trong quá trình chế biến và giảm tiêu thụ nước trong quá trình
            làm sạch.`,
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
