/* eslint-disable @next/next/no-img-element */

import ContenPage from "@/components/contentPage/contentPage";
import { GetDataSpecical } from "@/components/getDataProduct/getDataSpecical";
import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

export const metadata = {
  title: "Dây Pu Răng",
  description: `
   Với chất liệu Polyurethane cao cấp cho khả năng chống mài mòn và cắt rất tốt, kết hợp với nhiều loại dây thép khác nhau, đảm bảo độ bền cao và khả năng chống chịu lực kéo. Kết quả tạo ra dây PU răng có độ ổn định kích thước tuyệt vời.
  `,
};
export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <ContenPage />
        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataSpecical />
      </Body_>
    </Layout>
  );
}
