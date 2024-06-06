/* eslint-disable @next/next/no-img-element */
"use client";

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import { getData } from "@/services";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

import ReactJsxParser from "react-jsx-parser";

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
        {ui && <ReactJsxParser jsx={ui} />}

        <div className="w-full h-[1px] bg-[#000] my-10"></div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 ${id === "ChiuNhiet" ? "" : "lg:grid-cols-4"} gap-1 mt-10`}
        >
          {data.length > 0 &&
            typeof data === "object" &&
            data?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center p-2 shadow-md rounded-md mb-5"
                >
                  <figure
                    className="image image_resized"
                    style={{ width: "100%" }}
                  >
                    <Image
                      src={require(
                        `@/assets/images/${id === "PU" || id === "TPU" ? "PVC" : id}/${item.img.split("/")[4]}`
                      )}
                      alt=""
                      className="w-full aspect-square"
                      width={500}
                      height={500}
                    />
                  </figure>
                  <p className="text-center mt-2 text-lg font-semibold mb-5">
                    {item.name}
                  </p>
                  {item?.material && (
                    <div>
                      <strong>Chất liệu:</strong>
                      <span> {item.material}</span>
                    </div>
                  )}
                  {item?.info && (
                    <div>
                      <strong>Thông tin:</strong>
                      {item.info.map((info, index) => (
                        <span className="block" key={index}>
                          {info}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </Body_>
    </Layout>
  );
}
