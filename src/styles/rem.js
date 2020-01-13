import { Dimensions } from "react-native";
let { width: dW, height: dH } = Dimensions.get("window");
(Math.min(dW, dH) <= 420) ? scaleFactor = 1 : scaleFactor = 1.5
export const rem = (val = 1) => {
  return scaleFactor * val;
};