/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Ngành hàng không",
  description: `Đằng sau sự tiện lợi của việc ký gửi vali trước khi khởi hành và
            nhận chiếc vali này tại quốc gia đến thường là những thách thức to
            lớn về hậu cần. Ở cả nước đi và nước đến, hàng nghìn chiếc vali phải
            được vận chuyển từ quầy làm thủ tục lên máy bay và ngược lại.`,
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
