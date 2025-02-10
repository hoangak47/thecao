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
  title: "Ngành sản xuất bánh xe",
  description: ` Từ giai đoạn đầu vận chuyển nguyên liệu thô, xử lý các dải, tạo hình
            lốp và đến bước cuối cùng là kiểm tra lốp sau đó, chúng tôi có thể
            cung cấp các sản phẩm phù hợp cho khách hàng của mình. Chúng tôi
            nhận ra nhiều thiếu sót của giải pháp dây đai cao su hiện tại đặc
            biệt là trong ứng dụng phòng trộn.`,
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
