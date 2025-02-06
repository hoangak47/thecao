"use client";

import React from "react";

import { getData } from "@/services";

export default function GetInfomation() {
  const [Data, setData] = React.useState("");

  React.useEffect(() => {
    getData("introduce").then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: Data?.content }} />;
}
