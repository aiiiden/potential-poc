"use client";

import { PropsWithChildren } from "react";

export default function StepTitle({ children }: PropsWithChildren) {
  return <p className="text-base font-bold text-center">{children}</p>;
}
