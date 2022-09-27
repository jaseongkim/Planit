import React from "react";
import { createPortal } from "react-dom";

export default function ModalContainer({ children }) {
  return createPortal(<>{children}</>, document.getElementById("modal"));
}
