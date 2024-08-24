/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Ngành đá Granite",
  description: `Quá trình chế biến thuốc lá đòi hỏi nhiều loại băng tải và dây đai chế biến cho các công đoạn sản xuất khác nhau. Chúng tôi cung cấp dây đai polyolefin và polyester không chứa halogen, chất tạo bọt và không chứa nitơ. Chúng cũng là loại thực phẩm (FDA) để đáp ứng tiêu chuẩn an toàn ngày càng tăng.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành đá Granite
          </h1>
          <p className="text-justify mt-5">
            <strong>CÔNG TY THẾ CAO</strong> cung cấp các dòng sản phẩm đai hoàn
            chỉnh với nhiều hoa văn khác nhau cho các vật liệu như tấm đá cẩm
            thạch nhân tạo và tổng hợp, gạch men trong ngành chế biến đá và đá
            cẩm thạch.Các dây đai của thế cao, được ghi nhận là không bị va đập,
            chống mài mòn và được biết đến với độ bền cao và tuổi thọ dài, được
            sử dụng trong vận chuyển đá, đánh bóng, mài và các quy trình khác.
            loại theo áp suất mài, tốc độ và tính chất của các đối tượng được
            chuyển tải để đảm bảo sản lượng sản xuất ổn định hơn và tốt hơn. Thế
            cao rất vui khi được hỗ trợ khách hàng lựa chọn đúng
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
