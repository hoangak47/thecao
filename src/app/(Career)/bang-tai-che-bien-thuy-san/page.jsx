/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Ngành thủy sản",
  description: `Dựa trên nhiều năm kinh nghiệm trong việc sản xuất băng tải, thế cao đã hợp tác và phát triển nhiều loại sản phẩm băng tải phù hợp với nhu cầu cụ thể của ngành chế biến thịt và hải sản. Dù là để cắt thịt hay đóng gói cá, thế cao ưu tiên hàng đầu cho các yêu cầu vệ sinh của băng tải.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành thủy sản
          </h1>
          <p className="text-justify mt-5">
            Dựa trên nhiều năm kinh nghiệm trong việc sản xuất băng tải, thế cao
            đã hợp tác và phát triển nhiều loại sản phẩm băng tải phù hợp với
            nhu cầu cụ thể của ngành chế biến thịt và hải sản. Dù là để cắt thịt
            hay đóng gói cá, thế cao ưu tiên hàng đầu cho các yêu cầu vệ sinh
            của băng tải.
          </p>
          <p className="text-justify mt-5">
            Để đảm bảo an toàn thực phẩm tối đa và khả năng làm sạch hiệu quả,
            dây đai truyền lực căng và dương nguyên khối của thế cao tuân thủ
            các tiêu chuẩn cao nhất về vận chuyển thực phẩm an toàn và bền vững.
          </p>
          <p className="text-justify mt-5">
            Băng tải tổng hợp có khả năng được bịt kín hoàn toàn bằng cách phủ
            lớp phủ trên và dưới đồng thời bịt kín các cạnh của băng tải bằng
            polyurethane hoặc PVC, không để lại hiện tượng sờn rách hoặc thấm
            chất lỏng.
          </p>
          <p className="text-justify mt-5">
            Tất cả đều được sản xuất theo tiêu chuẩn quy định mới của FDA, USDA
            và EU.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
