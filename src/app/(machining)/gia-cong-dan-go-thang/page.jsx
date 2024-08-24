/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Gia công dán gờ thẳng",
  description: `Trong nhiều ngành công nghiệp khác nhau, cần phải sử dụng băng tải,
            do đó, sử dụng các mặt cắt dọc hoặc ngang. Công ty chúng tôi cung
            cấp mua dây đai từ các nhà sản xuất băng tải tốt nhất.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Gia công dán gờ thẳng
          </h1>
          <p className="text-justify mt-5">
            Trong nhiều ngành công nghiệp khác nhau, cần phải sử dụng băng tải,
            do đó, sử dụng các mặt cắt dọc hoặc ngang. Công ty chúng tôi cung
            cấp mua dây đai từ các nhà sản xuất băng tải tốt nhất. Việc sử dụng
            băng tải sử dụng mặt cắt ngang phù hợp để vận chuyển các sản phẩm
            rời trên băng tải nghiêng. Liều lượng sản phẩm được cung cấp bằng
            các mặt cắt ngang.
          </p>
          <p className="text-justify mt-5">
            Chúng tôi cung cấp nhiều loại thiết bị dành cho băng tải được trang
            bị dây đai làm từ nhiều loại vật liệu khác nhau, cũng như dành cho
            băng tải được sử dụng trong các điều kiện công nghệ khác nhau, trong
            các phòng khác nhau hoặc ngoài trời. Băng có thể có bất kỳ cấu hình
            mong muốn nào, bao gồm cả mặt cắt ngang.
          </p>
          <p className="text-justify mt-5">
            Phạm vi rộng của chúng tôi bao gồm các thiết bị băng tải khác nhau.
            Băng tải của chúng tôi sẽ phục vụ bạn lâu dài và đáng tin cậy, và
            trong trường hợp có vấn đề, chúng tôi sẽ giải quyết kịp thời với sự
            trợ giúp của bộ phận dịch vụ khách hàng.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
