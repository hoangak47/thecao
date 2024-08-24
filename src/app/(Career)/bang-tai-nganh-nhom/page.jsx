/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Ngành nhôm",
  description: `Đun nhôm là một kỹ thuật được sử dụng để biến đổi hợp kim nhôm thành các vật thể có mặt cắt ngang rõ ràng cho nhiều mục đích sử dụng. Hợp kim được làm nóng lên trong máy ép đun và ép đun để trở thành các cấu hình. `,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành nhôm
          </h1>
          <p className="text-justify mt-5">
            Đun nhôm là một kỹ thuật được sử dụng để biến đổi hợp kim nhôm thành
            các vật thể có mặt cắt ngang rõ ràng cho nhiều mục đích sử dụng. Hợp
            kim được làm nóng lên trong máy ép đun và ép đun để trở thành các
            cấu hình. Các sản phẩm nỉ được cung cấp có thể chịu được nhiệt độ
            khác nhau ( lên đến 600 độ C ngay lập tức) và vận chuyển các cấu
            hình có hình dạng và trọng lượng khác nhau.
          </p>
          <p className="text-justify mt-5">
            Ống nỉ, băng tải, đệm chịu nhiệt, đai chịu nhiệt.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
