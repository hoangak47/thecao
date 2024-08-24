/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Gia công dán bèo",
  description: `Nếu bạn có nhu cầu kết hợp vận chuyển hàng hóa theo chiều dọc và chiều ngang, hãy chú ý đến băng tải có tấm tôn. Tấm tôn ngăn chặn hàng hóa bị lăn hoặc tràn. `,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Gia công dán bèo
          </h1>
          <p className="text-justify mt-5">
            Nếu bạn có nhu cầu kết hợp vận chuyển hàng hóa theo chiều dọc và
            chiều ngang, hãy chú ý đến băng tải có tấm tôn. Tấm tôn ngăn chặn
            hàng hóa bị lăn hoặc tràn. Trên băng này Bạn sẽ có thể vận chuyển
            các phần khác nhau của vật liệu. Băng tải đai có tấm tôn cho phép
            bạn nâng tải lên độ cao cao hơn. Vật liệu để chế tạo băng tải như
            vậy là cao su, polyurethane và polyvinyl clorua.
          </p>
          <p className="text-justify mt-5">
            Công ty chúng tôi, trên cơ sở các linh kiện nhập khẩu chất lượng
            cao, đang sản xuất dây đai cho các loại băng tải khác nhau và các
            thiết bị băng tải khác, bao gồm một tấm tôn và các vách ngăn ngang
            (tay nắm). Bức ảnh cho thấy các mẫu sản phẩm của chúng tôi. Nếu bạn
            cần băng tải hãy liên hệ với chúng tôi. Kinh nghiệm của chúng tôi
            với băng tải là khá lớn và chất lượng của băng tải mua từ chúng tôi
            sẽ cho phép bạn tập trung vào công việc chứ không phải vào việc sửa
            chữa băng tải.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
