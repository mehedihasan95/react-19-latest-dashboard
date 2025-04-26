import React from "react";
import {
  DotLottieReact,
  DotLottieReactProps,
} from "@lottiefiles/dotlottie-react";

interface Props extends DotLottieReactProps {
  srcFile: string;
}
const DotLottie: React.FC<Props> = ({ srcFile, ...rest }) => {
  return <DotLottieReact {...rest} src={srcFile} loop autoplay />;
};

export default DotLottie;
