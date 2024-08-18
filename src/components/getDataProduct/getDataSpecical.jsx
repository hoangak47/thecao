"use client";

import Image from "next/image";
import { getData } from "@/services";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
export function GetDataSpecical() {
  const id = usePathname().slice(1);

  const [data, setData] = React.useState([
    {
      name: `3M, 5M, 8M, 14M`,
      thumbsnail: `specifications HTD.png`,
      child: [
        {
          name: "3M",
          specifications: {
            P: "3.0 mm",
            H: "2.4 mm",
            Ht: "1.22 mm",
          },
          image: "3M.jpg",
        },
        {
          name: "5M",
          specifications: {
            P: "5.0 mm",
            H: "3.6 mm",
            Ht: "2.1 mm",
          },
          image: "5M.jpg",
        },
        {
          name: "8M",
          specifications: {
            P: "8.0 mm",
            H: "5.6 mm",
            Ht: "3.9 mm",
          },
          image: "8M.jpg",
        },
        {
          name: "14M",
          specifications: {
            P: "14.0 mm",
            H: "10.0 mm",
            Ht: "6.1 mm",
          },
          image: "14M.jpg",
        },
      ],
    },
    {
      name: "S5M, S5M-black, S8M, S8M-black, S8M-green",
      thumbsnail: `specifications SM.png`,
      child: [
        {
          name: "S5M",
          specifications: {
            P: "5.0 mm",
            H: "3.4 mm",
            Ht: "1.9 mm",
          },
          image: "S5M.jpg",
        },
        {
          name: "S5M-black",
          specifications: {
            P: "5.0 mm",
            H: "3.4 mm",
            Ht: "1.9 mm",
          },
          image: "S5M-black.jpg",
        },
        {
          name: "S8M",
          specifications: {
            P: "8.0 mm",
            H: "5.2 mm",
            Ht: "2.95 mm",
          },
          image: "S8M.jpg",
        },
        {
          name: "S8M-black",
          specifications: {
            P: "8.0 mm",
            H: "5.2 mm",
            Ht: "2.95 mm",
          },
          image: "S8M-black.jpg",
        },
        {
          name: "S8M-green",
          specifications: {
            P: "8.0 mm",
            H: "5.2 mm",
            Ht: "2.95 mm",
          },
          image: "S8M-green.jpg",
        },
      ],
    },
    {
      name: "T5, T10, T10-green, T20",
      thumbsnail: `specifications T.png`,
      child: [
        {
          name: "T5",
          specifications: {
            P: "5.0 mm",
            H: "2.2 mm",
            Ht: "1.2 mm",
          },
          image: "T5.jpg",
        },
        {
          name: "T10",
          specifications: {
            P: "10.0 mm",
            H: "4.5 mm",
            Ht: "2.5 mm",
          },
          image: "T10.jpg",
        },
        {
          name: "T10-green",
          specifications: {
            P: "10.0 mm",
            H: "4.5 mm",
            Ht: "2.5 mm",
          },
          image: "T10-green.jpg",
        },
        {
          name: "T20",
          specifications: {
            P: "20.0 mm",
            H: "8.0 mm",
            Ht: "5.0 mm",
          },
          image: "T20.jpg",
        },
      ],
    },
  ]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
      {data.length > 0 &&
        data?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col p-2 shadow-md rounded-md mb-5 hover:shadow-2xl transition-all cursor-pointer"
            >
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
