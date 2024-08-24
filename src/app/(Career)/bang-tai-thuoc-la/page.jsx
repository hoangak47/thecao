/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Ngành thuốc lá",
  description: `Quá trình chế biến thuốc lá đòi hỏi nhiều loại băng tải và dây đai chế biến cho các công đoạn sản xuất khác nhau. Chúng tôi cung cấp dây đai polyolefin và polyester không chứa halogen, chất tạo bọt và không chứa nitơ. Chúng cũng là loại thực phẩm (FDA) để đáp ứng tiêu chuẩn an toàn ngày càng tăng.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành thuốc lá
          </h1>
          <p className="text-justify mt-5">
            Quá trình chế biến thuốc lá đòi hỏi nhiều loại băng tải và dây đai
            chế biến cho các công đoạn sản xuất khác nhau. Chúng tôi cung cấp
            dây đai polyolefin và polyester không chứa halogen, chất tạo bọt và
            không chứa nitơ. Chúng cũng là loại thực phẩm (FDA) để đáp ứng tiêu
            chuẩn an toàn ngày càng tăng.
          </p>

          <p className="text-justify mt-5">
            Nói chung, các quy trình trong ngành công nghiệp thuốc lá có thể
            được <strong>chia thành ba phân đoạn</strong>:
          </p>
          <ul className="text-justify mt-2 p-[revert] list-disc">
            <li>Chế biến lá xanh</li>
            <li>Xử lý sơ cấp</li>
            <li>Sản xuất thứ cấp</li>
          </ul>
          <p className="text-justify mt-5">
            Đai thuốc lá phủ TPO và TPEE của công ty thế cao tuân thủ các Quy
            định của FDA, USDA, EU và Nhật Bản. Ngoài ra, chúng phù hợp với quá
            trình nhiệt phân, nghĩa là vật liệu đai sẽ không giải phóng các chất
            độc hại trong quá trình đốt cháy, một tiêu chuẩn được ngành công
            nghiệp thuốc lá yêu cầu cụ thể. Đặc biệt băng tải được phủ TPEE đảm
            bảo khả năng chống mài mòn cao và hoạt động tốt ở nhiệt độ cao cũng
            như thấp.
          </p>
          <p className="text-justify mt-5">
            <strong> Băng tải sử dụng trong ngành sản xuất thuốc lá</strong> bao
            gồm các loại sau:
          </p>
          <ul className="text-justify mt-2 p-[revert] list-disc">
            <li>
              Băng tải PVC (polyvinyl chloride) chịu được nhiệt độ -15 ~ 80ºC
            </li>
            <li>Băng tải PU (Polyurethane) chịu được nhiệt độ -20 ~ 80ºC</li>
            <li>Băng tải PE (polyolefine) chịu được nhiệt độ -30 ~ 60ºC</li>
            <li>Băng tải TPEE (Polyester) chịu được nhiệt độ -30 ~ 100ºC</li>
            <li>Băng tải Silicone chịu được nhiệt độ -30 ~ 150ºC</li>
          </ul>
          <p className="text-justify mt-5">
            Để đáp ứng yêu cầu cụ thể quý công ty hãy liên hệ chúng tôi sẽ giải
            đáp những thắc mắc, tư vấn về băng tải phù hợp nhất để tiết kiệm chi
            phí cho khách hàng. Với 20 năm kinh nghiệm trong thị trường băng tải
            <strong>Công Ty Thế Cao</strong> đảm bảo sẽ mang lại sự hài lòng về
            uy tín chất lượng và giá thành hợp lý.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
