"use client";

import { SVGClose } from "@/assets/svg";
import React, { useEffect } from "react";

export default function Modal({ children, setCurrentIndex }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
    setCurrentIndex(0);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`absolute top-0 left-0 right-0 bottom-0`}
      ></div>
      <div
        className={`fixed z-50 bg-[#00000080] flex items-center justify-center h-screen w-screen top-0 left-0 ${open ? "scale-100" : "scale-0"} transition-all duration-300`}
      >
        <div
          className={`w-full h-full rounded-md relative p-10`}
          style={{
            backgroundColor: "rgb(0 0 0 / 60%)",
          }}
        >
          <div
            className={`bg-white p-4 absolute top-1 right-5 hover:cursor-pointer hover:shadow-lg`}
            onClick={handleClose}
          >
            <SVGClose width="30" height="30" fill="#000" />
          </div>

          {children}
        </div>
      </div>
    </>
  );
}
