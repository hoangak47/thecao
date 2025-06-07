"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { accountStore } from "@/lib/store";

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = accountStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
