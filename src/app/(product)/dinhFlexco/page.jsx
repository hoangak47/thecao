/* eslint-disable @next/next/no-img-element */

import { GetDataSpecical } from "@/components/getDataProduct/getDataSpecical";
import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

export const metadata = {
  title: "Nẹp FLexco",
  description: `
   Nẹp nối băng tải thương hiệu FLEXCO đến từ Mỹ là một trong những phương pháp tối ưu trong việc kết nối 2 đầu băng tải và được áp dụng trong nhiều ngành công nghiệp sản xuất khác nhau như: nông nghiệp, xử lí bưu kiện, sản xuất gỗ, thực phẩm ,…
  `,
};
export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <>
          <h1 className="lg:text-4xl text-2xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Nẹp FLexco
          </h1>

          <p className="text-justify mt-5">
            <strong>Nẹp nối băng tải</strong> thương hiệu{" "}
            <strong className="blue">FLEXCO</strong> đến từ Mỹ là một trong
            những phương pháp tối ưu trong việc kết nối 2 đầu băng tải và được
            áp dụng trong nhiều ngành công nghiệp sản xuất khác nhau như: nông
            nghiệp, xử lí bưu kiện, sản xuất gỗ, thực phẩm ,…
          </p>
          <p className="text-justify mt-5 text-lg font-semibold">Ưu điểm:</p>

          <ul className="text-justify p-[revert] list-disc">
            <li>Lắp đặt đơn giản và nhanh chóng giúp tiết kiệm thời gian.</li>
            <li>
              Có độ bền cao và tiếp xúc được nhiều môi trường khác nhau như
              nhiệt độ, độ ẩm hoặc chất gây ô nhiễm.
            </li>
            <li>Giúp tháo băng tải mà không cần cắt rời băng tải.</li>
            <li>
              Nẹp móc nối băng tải là yếu tố chính giúp cho việc nối tròn của
              dây băng một cách nhanh chóng và linh động. Giúp khách hàng có thể
              tiết kiệm được thời gian tối đa khi cần thay băng mà ko cần tháo
              dỡ máy gây mất thời gian và công sức.
            </li>
          </ul>
          <p className="text-justify mt-5">
            <strong>Nẹp móc inox</strong> được chia làm nhiều dạng khác nhau, có
            <strong className="blue">Nẹp móc dẹp</strong> và{" "}
            <strong className="blue">Nẹp móc tròn</strong>. Tùy theo từng loại
            băng tải mà được dùng loại Nẹp móc khác nhau, độ dày phi móc cũng
            được điều chỉnh cho phù hợp.
          </p>
          <p className="text-justify mt-5">
            <strong>Nẹp bản lề nhựa</strong> cũng được dùng cho nối băng cho
            những máy dò kim loại, tải trọng nhẹ và tốc độ chạy chậm.
          </p>
          <p className="text-justify mt-5">
            <strong>Nẹp bản lề inox</strong> dùng được nối cho dây băng PVC,PU
            hay băng tải cao su có độ dày khác nhau.
          </p>
        </>
        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataSpecical />
      </Body_>
    </Layout>
  );
}
