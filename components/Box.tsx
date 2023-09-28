"use client";
import { PropsWithChildren, useEffect, useRef } from "react";

interface BoxProp extends PropsWithChildren {
  type: "client" | "server";
}

export default function Box({ type, children }: BoxProp) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className={`flex flex-col gap-4 justify-center items-center border-2 border-gray-400 border-dotted py-5 rounded-xl ${
        type === "client" && "bg-white"
      } ${type === "server" && "bg-gray-100"}`}
    >
      {children}
    </div>
  );
}
