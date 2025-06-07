"use client";
import React from "react";

import { getData } from "@/services";
import { usePathname } from "next/navigation";
import "./ContentPage.css";

export default function ContenPage() {
  const [Data, setData] = React.useState("");
  const currentPath = usePathname();

  React.useEffect(() => {
    getData("content" + currentPath).then((data) => {
      setData(data);
    });
  }, []);
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: Data?.content }}
    />
  );
}
