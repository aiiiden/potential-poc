"use client";
import { PropsWithChildren } from "react";

interface BoxProp extends PropsWithChildren {
  type: "client" | "server";
}

export default function Box({ type, children }: BoxProp) {
  return (
    <div
      className={`flex flex-col gap-4 justify-center items-center border-2 border-gray-400 border-dotted py-5 rounded-xl ${
        type === "client" && "bg-white"
      } ${type === "server" && "bg-gray-100"}`}
    >
      {children}
    </div>
  );
}
