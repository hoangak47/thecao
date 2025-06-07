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
  title: "Ngành bao bì",
  description: `Băng tải đóng một vai trò quan trọng đối với chất lượng và hiệu quả của máy móc trong ngành đóng gói, một ngành liên kết chặt chẽ với các quy trình sản xuất ví dụ như chế biến thực phẩm và sản xuất vật liệu xây dựng.
`,
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
