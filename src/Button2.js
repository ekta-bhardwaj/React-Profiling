import React from "react";
import { UseCountRender } from "./UseCountRender";
export const Button2 = ({ increment2 }) => {
  UseCountRender();
  return <button onClick={increment2}>Button 2</button>;
};
