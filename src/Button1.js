import React from "react";
import { UseCountRender } from "./UseCountRender";
export const Button1 = ({ increment }) => {
  UseCountRender();
  return <button onClick={increment}>Button 2</button>;
};
