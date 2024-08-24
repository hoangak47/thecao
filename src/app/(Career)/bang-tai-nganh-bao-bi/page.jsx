/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

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
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành bao bì
          </h1>
          <p className="text-justify mt-5">
            Băng tải đóng một vai trò quan trọng đối với chất lượng và hiệu quả
            của máy móc trong ngành đóng gói, một ngành liên kết chặt chẽ với
            các quy trình sản xuất ví dụ như chế biến thực phẩm và sản xuất vật
            liệu xây dựng.
          </p>

          <p className="text-justify mt-5">
            Vận chuyển theo chiều dọc và chiều ngang,cung cấp các đặc tính kẹp
            phù hợp, quy trình phân loại quang học, máy dò kim loại, định vị
            chính xác, quay và trượt... Đây chỉ là một số thách thức và đặc điểm
            có liên quan đến ngành bao bì.
          </p>
          <p className="text-justify mt-5">
            Trong các ứng dụng đóng gói, thường không có thử thách nào giống
            nhau. Sự đa dạng của các sản phẩm được đóng gói, nhiều loại bao bì,
            quy trình đóng gói sản phẩm hoặc hoàn cảnh luôn thay đổi (nhiệt độ,
            độ ẩm) khiến mỗi thách thức đều khác nhau.
          </p>
          <p className="text-justify mt-5">
            Đặc tính bám và nhả tuyệt vời đối với cả ứng dụng phi thực phẩm và
            thực phẩm
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
