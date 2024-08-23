/* eslint-disable @next/next/no-img-element */

import { GetDataSpecical } from "@/components/getDataProduct/getDataSpecical";
import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

export const metadata = {
  title: " Dây Truyền động",
  description: `
   Dây curoa bản dẹt thường là chạy tốc độ cao, lớp giữa của dây là lớp
            nilon, bên ngoài được bọc bằng lớp cao su, da, vải sợi,...
  `,
};
export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <>
          <h1 className="lg:text-4xl text-2xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Dây Truyền động
          </h1>

          <p className="text-justify mt-5">
            Dây curoa bản dẹt thường là chạy tốc độ cao, lớp giữa của dây là lớp
            nilon, bên ngoài được bọc bằng lớp cao su, da, vải sợi,...
          </p>
          <p className="text-justify mt-5">
            <strong>Công ty Thế Cao</strong> đang có các loại dây từ 0.8mm đến
            6mm cho dây xanh vàng, dây xăng, và dây hapasit, được nối ép trực
            tiếp tại xưởng Thế Cao do đó tiết kiệm được thời gian giao hàng đến
            cho khách.
          </p>
          <p className="text-justify mt-5">
            Dây đai dẹp, dây truyền động được nhập khẩu 100% từ nước ngoài,
            Chúng tôi vinh dự là nhà cung cấp hàng đầu và đa dạng mẫu mã đi kèm
            chất lượng tốt nhất cho thị trường,ứng dụng chủ yếu trong ngành như:
          </p>

          <ul className="text-justify p-[revert] list-disc">
            <li>Dệt may, dệt sợi, in ấn, bao bì giấy.</li>
            <li>Sản xuất ngành gỗ.</li>
            <li>Thực phẩm, chế biến thủy sản…</li>
          </ul>
        </>
        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataSpecical />
      </Body_>
    </Layout>
  );
}
