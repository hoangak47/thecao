"use client";

import Image from "next/image";
import { getData } from "@/services";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
export function GetData() {
  const id = usePathname().slice(1);

  const [data, setData] = React.useState([]);

  useEffect(() => {
    getData(`products/${id}/data`)
      .then((data) => {
        setData(data || []);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  return (
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
              <figure className="image image_resized" style={{ width: "100%" }}>
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
  );
}
