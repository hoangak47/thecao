/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useRouter } from "next/navigation";

import "./style.css";
import { getFromSessionStorage } from "@/services";
import AdminProductList from "./[id]/page";

export default function Admin({ children }) {
  const router = useRouter();

  React.useEffect(() => {
    const test = getFromSessionStorage("login");

    if (!test) {
      router.push("/admin/login");
    }
  }, []);

  return <AdminProductList />;
}
