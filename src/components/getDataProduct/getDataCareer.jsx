"use client";

import Image from "next/image";
import { getData } from "@/services";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Modal from "../Modal";
import Link from "next/link";
export function GetDataCareer() {
  const id = usePathname().slice(1);

  const [data, setData] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    getData(`${id}/data`)
      .then((data) => {
        setData(data || []);
      })
      .catch((error) => {
        return error;
      });
  }, [id]);

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 ${id === "ChiuNhiet" ? "" : "lg:grid-cols-4"} gap-1 mt-10`}
    >
      {data.length > 0 ? (
        typeof data === "object" &&
        data?.map((item, index) => {
          return (
            <div key={index}>
              {id === "Career" || id === "machining" ? (
                <Link
                  href={item.url}
                  className="flex flex-col p-2 shadow-md rounded-md mb-5 relative"
                >
                  {id === "Career" || id === "machining" ? null : (
                    <Modal setCurrentIndex={setCurrentIndex}>
                      <Image
                        src={require(`@/assets/images/${id}/${item.img}`)}
                        alt=""
                        className="w-full h-full object-contain"
                        width={500}
                        height={500}
                      />
                    </Modal>
                  )}

                  <Image
                    src={require(`@/assets/images/${id}/${item.img}`)}
                    alt=""
                    className="w-full h-full min-h-48 object-cover"
                    width={500}
                    height={500}
                  />
                  <p className="text-center mt-2 text-lg font-semibold mb-5 line-clamp-1">
                    {item.name}
                  </p>
                </Link>
              ) : (
                <>
                  {item.child.map((item_, index_) => {
                    return (
                      <div
                        key={index_}
                        className="flex flex-col p-2 shadow-md rounded-md mb-5 relative cursor-pointer"
                      >
                        {id === "Career" ? null : (
                          <Modal setCurrentIndex={setCurrentIndex}>
                            <Image
                              src={require(
                                `@/assets/images/${id}/${item_?.img}`
                              )}
                              alt={item_?.name}
                              className="w-full h-full object-contain"
                              width={500}
                              height={500}
                            />
                          </Modal>
                        )}

                        <Image
                          src={require(`@/assets/images/${id}/${item_?.img}`)}
                          alt={item_?.name}
                          className="w-full h-full min-h-60 max-h-96 object-cover aspect-square"
                          width={500}
                          height={500}
                        />
                        <p className="text-center mt-2 text-lg font-semibold mb-5 line-clamp-1">
                          {item_?.name}
                        </p>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          );
        })
      ) : (
        <h1 className="mt-5 text-lg font-semibold">Dữ liệu đang cập nhật</h1>
      )}
    </div>
  );
}
