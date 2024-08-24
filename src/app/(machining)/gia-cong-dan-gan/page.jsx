/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Gia công dán gân",
  description: `
            Nguyên liệu thô và thành phẩm được vận chuyển bằng băng tải trong
            các ngành công nghiệp khác nhau. Trong số các loại băng tải, băng
            tải có mặt cắt dọc thường được sử dụng`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Gia công dán gân
          </h1>
          <p className="text-justify mt-5">
            Nguyên liệu thô và thành phẩm được vận chuyển bằng băng tải trong
            các ngành công nghiệp khác nhau. Trong số các loại băng tải, băng
            tải có mặt cắt dọc thường được sử dụng. Biên dạng dọc có tác dụng cố
            định băng tải trên băng tải và ngăn chặn băng tải trượt trên băng
            tải. Tùy thuộc vào chất liệu, băng tải có thể được sử dụng trong
            nhiều ngành công nghiệp khác nhau: từ thực phẩm, y tế đến hóa chất
            và xây dựng.
          </p>
          <p className="text-justify mt-5">
            Chúng tôi đã làm việc với các sản phẩm băng tải trong một thời gian
            dài và đã tích lũy được nhiều kinh nghiệm trong lĩnh vực này. Chúng
            tôi cung cấp băng tải có biên dạng dọc và bạn có thể mua chúng từ
            chúng tôi với giá rất rẻ. Dòng sản phẩm băng tải của chúng tôi được
            đặc trưng bởi chất lượng cao và sự đa dạng - cả mặt cắt ngang và mặt
            cắt dọc đều được cung cấp. Dù bạn đang tham gia vào hoạt động sản
            xuất nào, tại đây Bạn có thể chọn dây đai thích hợp cho băng tải của
            mình. Không quan trọng máy của bạn hoạt động với hình dạng dọc,
            ngang hay hình dạng biên dạng khác - chúng tôi có mọi thứ! Nếu bạn
            thích mặt cắt dọc thì việc chọn băng tải sẽ dễ dàng vì chúng tôi có
            rất nhiều loại mặt cắt dọc.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
