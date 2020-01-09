import { Dimensions, Platform } from "react-native";

let { width: dW, height: dH } = Dimensions.get("window");
const remBasis = Math.min(dW, dH);
const scaleFactor = remBasis < 420 ? 1 : remBasis < 850 ? 1.3 : 1.5;
// export const isLargeScreen = (Platform.isPad && dW >= 750) || dH >= 750;
export const rem = (val = 1) => {
  return scaleFactor * val;
};