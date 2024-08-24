/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: " Ngành thực phẩm",
  description: `Ngành thực phẩm băng tải dùng trong ngành này phải đảm bảo vệ sinh oan toàn thực phẩm, công ty Thế Cao đã cung cấp cho thị trường loại băng PU, PVC có thể chịu dầu thực phẩm... đáp ứng nhu cầu đa dạng của ngành.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành thực phẩm
          </h1>
          <p className="text-justify mt-5">
            <strong>Ngành thực phẩm</strong> băng tải dùng trong ngành này phải
            đảm bảo vệ sinh oan toàn thực phẩm, công ty Thế Cao đã cung cấp cho
            thị trường loại băng PU, PVC có thể chịu dầu thực phẩm... đáp ứng
            nhu cầu đa dạng của ngành.
          </p>

          <p className="text-justify mt-5">
            <strong>Băng tải bèo</strong> được dùng để vận chuyển hàng hóa và
            các vật liệu lên cao với độ dốc tương đối lớn. Được thiết kế với các
            đặc điểm đặc trưng và được ứng dụng rộng rãi ở nhiều nghành sản xuất
            thực phẩm và nông sản như là trái cây, rau, củ, quả, bột , thuốc,….
            Với cấu tạo thường thấy ở <strong>băng tải bèo</strong> là bề mặt
            trơn, kết hợp với bèo ở 2 bên bằng chất liệu PVC CHÍNH HÃNG, dán gân
            T ( PVC ) dán ngang ở mặt băng tải. Mục đích để tạo ra khoang chứa
            vật liệu dùng để vận chuyển hàng hóa lên độ dốc từ 30 đến 50 độ mà
            không lo bị rơi giúp đạt hiệu quả cao trong sản xuất.
          </p>
          <p className="text-justify mt-5">
            <strong>Băng tải bèo</strong> tại <strong>Thế Cao</strong> có chất
            liệu băng tải từ nhựa PVC hoặc PU nên nó có khả năng chống ẩm mốc và
            chịu được những tác động từ điều kiện nóng ẩm của môi trường ở Việt
            Nam, cũng như độ bền và tuổi thọ của băng tải loại này cũng rất cao.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />
        <Partner />
      </Body>
    </Layout>
  );
}
