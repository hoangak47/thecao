"use client";

import React from "react";

import { getData } from "@/services";

export default function Aviation() {
  const [Data, setData] = React.useState("");

  React.useEffect(() => {
    getData("aviation").then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: Data?.content }} />;
}
