"use client";

import Image from "next/image";
import { getData } from "@/services";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Modal from "../Modal";
export function GetDataSpecical() {
  const id = usePathname().slice(1);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentIndex2, setCurrentIndex2] = React.useState(0);
  const [data, setData] = React.useState(0);
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
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
      {data.length > 0 &&
        data?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setCurrentIndex2(index);
              }}
              className="flex flex-col p-2 shadow-md rounded-md mb-5 hover:shadow-2xl transition-all cursor-pointer relative"
            >
              <Modal setCurrentIndex={setCurrentIndex}>
                <div className="flex gap-1 md:flex-row flex-col h-full md:overflow-hidden overflow-y-scroll not-scrollbar">
                  {data[index]?.thumbsnail && (
                    <div className="flex-[3] flex justify-center items-center">
                      <Image
                        src={require(
                          `@/assets/images/products/${id}/${data[index]?.thumbsnail}`
                        )}
                        alt={data[index].name}
                        className="w-full h-full object-contain"
                        width={500}
                        height={500}
                      />
                    </div>
                  )}

                  <div className={`flex-[3] flex justify-center items-center`}>
                    <Image
                      src={require(
                        `@/assets/images/products/${id}/${data[currentIndex2]?.child[currentIndex]?.image}`
                      )}
                      alt={data[currentIndex2]?.name}
                      className="w-full h-full object-contain"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div
                    className={`flex-${data[index]?.thumbsnail ? "[2]" : 1} md:overflow-scroll overflow-[none] not-scrollbar px-3`}
                  >
                    {data[currentIndex2]?.child.map((item, index_) => {
                      return (
                        <div
                          key={index_}
                          onClick={() => {
                            setCurrentIndex(index_);
                          }}
                          className="flex flex-col p-2 cursor-pointer relative border-b-black border-b-[1px] transition-all"
                        >
                          <h3 className="text-center line-clamp-1 mt-8 text-slate-700">
                            {item.name}
                          </h3>
                          {item?.specifications && (
                            <span>
                              {currentIndex === index_ &&
                                Object.entries(item.specifications).map(
                                  (item_) => {
                                    return (
                                      <p
                                        key={item_}
                                        className={`text-left line-clamp-1 mt-8 text-slate-700`}
                                      >
                                        {item_[0]} : {item_[1]}
                                      </p>
                                    );
                                  }
                                )}
                            </span>
                          )}

                          {item?.detail && <div></div>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Modal>
              <Image
                src={require(
                  `@/assets/images/products/${id}/${item.child[0].image}`
                )}
                alt={item.name}
                className="w-full h-full max-h-56 object-cover"
                width={500}
                height={500}
              />

              <h3 className="text-center line-clamp-1 mt-8 text-slate-700">
                {item.name}
              </h3>
            </div>
          );
        })}
    </div>
  );
}
