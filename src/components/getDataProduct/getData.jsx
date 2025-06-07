"use client";

import Image from "next/image";
import { getData } from "@/services";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Modal from "../Modal";
export function GetData() {
  const id = usePathname().slice(1);

  const [data, setData] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    getData(`products/${id}/data`)
      .then((data) => {
        setData(Object.values(data) || []);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 ${id === "ChiuNhiet" ? "" : "lg:grid-cols-4"} gap-1 mt-10`}
    >
      {data.length > 0 ? (
        typeof data === "object" &&
        data?.map((item, index) => {
          const imageSrc = item.img.startsWith("https")
            ? item.img
            : require(
                `@/assets/images/${id === "PU" || id === "TPU" ? "PVC" : id}/${item.img.split("/")[4]}`
              );

          return (
            <div
              key={index}
              className="flex flex-col p-2 shadow-md rounded-md mb-5 relative"
            >
              <Modal setCurrentIndex={setCurrentIndex}>
                <Image
                  src={imageSrc}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  width={500}
                  height={500}
                />
              </Modal>
              <Image
                src={imageSrc}
                alt={item.name}
                className="w-full h-full max-h-56 object-contain"
                width={500}
                height={500}
              />
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
        })
      ) : (
        <h1>Chua co du lieu</h1>
      )}
    </div>
  );
}
