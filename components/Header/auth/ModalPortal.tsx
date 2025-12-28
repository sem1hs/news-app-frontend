"use client";

import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: Props) {
  if (typeof document === "undefined") return null;

  return createPortal(children, document.body);
}
