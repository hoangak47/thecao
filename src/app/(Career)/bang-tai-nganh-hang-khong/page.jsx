/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";

export const metadata = {
  title: "Ngành hàng không",
  description: `Đằng sau sự tiện lợi của việc ký gửi vali trước khi khởi hành và
            nhận chiếc vali này tại quốc gia đến thường là những thách thức to
            lớn về hậu cần. Ở cả nước đi và nước đến, hàng nghìn chiếc vali phải
            được vận chuyển từ quầy làm thủ tục lên máy bay và ngược lại.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành hàng không
          </h1>
          <p className="text-justify mt-5">
            Đằng sau sự tiện lợi của việc ký gửi vali trước khi khởi hành và
            nhận chiếc vali này tại quốc gia đến thường là những thách thức to
            lớn về hậu cần. Ở cả nước đi và nước đến, hàng nghìn chiếc vali phải
            được vận chuyển từ quầy làm thủ tục lên máy bay và ngược lại. Có
            tính đến tất cả những thách thức có thể xảy ra trên đường đi.
          </p>

          <p className="text-justify mt-5">
            Băng tải được sử dụng trong lĩnh vực này đòi hỏi một số đặc điểm như
            tiếng ồn thấp, đặc tính chống cháy (ISO-340), độ bền cao cũng như
            khả năng chống mài mòn cao. Chúng tôi làm việc với các sân bay và
            trung tâm kho hàng khác nhau và cung cấp nhiều loại sản phẩm. Bắt
            đầu với dây đai tiêu chuẩn, từ dây đai dệt chắc chắn và dây đai con
            lăn trực tiếp, cho đến dây đai định giờ.
          </p>
          <p className="text-justify mt-5">
            Trong các quy trình quan trọng như vậy, một băng tải đáng tin cậy có
            tầm quan trọng rất lớn. Băng tải đảm bảo vận chuyển và phân loại
            hành lý hiệu quả đồng thời hỗ trợ các hướng vận chuyển ngang,
            nghiêng hoặc cong.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />
      </Body>
    </Layout>
  );
}
