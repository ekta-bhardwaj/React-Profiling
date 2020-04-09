import { useRef } from "react";

export const UseCountRender = () => {
  const Render = useRef(0);
  console.log("render: ", Render.current++);
};
