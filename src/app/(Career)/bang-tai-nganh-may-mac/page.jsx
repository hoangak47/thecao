/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Ngành in ấn, may mặc",
  description: `Dung sai độ dày, khả năng kháng hóa chất và giảm thiểu độ giãn dài của dây đai là một trong những thách thức quan trọng nhất khi in trên vải. Mọi khiếm khuyết trên băng tải đều có thể được phản ánh trên kết quả in của hàng dệt.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành in ấn, may mặc
          </h1>
          <p className="text-justify mt-5">
            Dung sai độ dày, khả năng kháng hóa chất và giảm thiểu độ giãn dài
            của dây đai là một trong những thách thức quan trọng nhất khi in
            trên vải. Mọi khiếm khuyết trên băng tải đều có thể được phản ánh
            trên kết quả in của hàng dệt.
          </p>

          <p className="text-justify mt-5">
            Đây là những yêu cầu cơ bản của ngành in dệt cần phải có trong băng
            tải thường thấy là:
          </p>
          <ul className="text-justify mt-2 p-[revert] list-disc">
            <li>Sự chính xác</li>
            <li>Độ cứng bền cao</li>
            <li>Kháng hóa chất</li>
            <li>Khả năng chịu nhiệt</li>
            <li>Mối nối đáng tin cậy</li>
          </ul>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
