/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Ngành sản xuất bánh xe",
  description: ` Từ giai đoạn đầu vận chuyển nguyên liệu thô, xử lý các dải, tạo hình
            lốp và đến bước cuối cùng là kiểm tra lốp sau đó, chúng tôi có thể
            cung cấp các sản phẩm phù hợp cho khách hàng của mình. Chúng tôi
            nhận ra nhiều thiếu sót của giải pháp dây đai cao su hiện tại đặc
            biệt là trong ứng dụng phòng trộn.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành sản xuất bánh xe
          </h1>
          <p className="text-justify mt-5">
            Từ giai đoạn đầu vận chuyển nguyên liệu thô, xử lý các dải, tạo hình
            lốp và đến bước cuối cùng là kiểm tra lốp sau đó, chúng tôi có thể
            cung cấp các sản phẩm phù hợp cho khách hàng của mình. Chúng tôi
            nhận ra nhiều thiếu sót của giải pháp dây đai cao su hiện tại đặc
            biệt là trong ứng dụng phòng trộn. Một rủi ro phổ biến trong quy
            trình này: nhiễm bẩn cao su bị kẹt vào chốt. Một loạt sản phẩm đặc
            biệt được phát triển để loại bỏ mối nguy tiềm ẩn này đồng thời cải
            thiện hiệu suất của dây đai trong quy trình.
          </p>

          <p className="text-justify mt-5">
            Đai PU chịu mài mòn cao là sản phẩm được sử dụng phổ biến nhất trong
            ngành công nghiệp ô tô để dập cửa ô tô, khung cửa ô tô và các loại
            khác. Máy ép Schuler được trang bị băng chuyền của nhà cung cấp của
            thế cao trong các nhà máy của Volkswagen cho những yêu cầu khó khăn
            như vậy. Chúng tôi cũng có thể cung cấp đai định thời được sử dụng
            trong môi trường chân không để xếp các tấm nhôm.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />
        <Partner />
      </Body>
    </Layout>
  );
}
