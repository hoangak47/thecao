/* eslint-disable @next/next/no-img-element */
"use client";

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import { getData } from "@/services";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Product({}) {
  const { id } = useParams();

  const [data, setData] = React.useState([]);
  const [ui, setUi] = React.useState(null);

  useEffect(() => {
    Promise.all([getData(`products/${id}/data`), getData(`products/${id}/ui`)])
      .then(([dataResponse, uiResponse]) => {
        setData(dataResponse || []);
        setUi(uiResponse || "");
      })
      .catch((error) => {
        return error;
      });
  }, [id]);
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        {/* {ui && <ReactJsxParser jsx={ui} />} */}

        <span className="text-3xl font-bold">data đang được cập nhật</span>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
      </Body_>
    </Layout>
  );
}
